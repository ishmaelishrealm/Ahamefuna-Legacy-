import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('stripe-signature')!;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error('Webhook signature verification failed:', err.message);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session);
        break;
      
      case 'customer.subscription.updated':
        await handleSubscriptionUpdated(event.data.object as Stripe.Subscription);
        break;
      
      case 'customer.subscription.deleted':
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription);
        break;
      
      case 'invoice.payment_succeeded':
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice);
        break;
      
      case 'invoice.payment_failed':
        await handlePaymentFailed(event.data.object as Stripe.Invoice);
        break;
      
      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const userId = session.metadata?.userId;
  const subscriptionType = session.metadata?.subscriptionType || 'monthly';
  
  if (!userId) {
    console.error('No userId in session metadata');
    return;
  }

  try {
    await updateDoc(doc(db, 'users', userId), {
      subscribed: true,
      subscriptionType,
      subscriptionId: session.subscription,
      subscriptionStatus: 'active',
      updatedAt: new Date(),
    });
    
    console.log(`User ${userId} subscription activated: ${subscriptionType}`);
  } catch (error) {
    console.error('Error updating user subscription:', error);
  }
}

async function handleSubscriptionUpdated(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;
  
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    await updateDoc(doc(db, 'users', userId), {
      subscriptionStatus: subscription.status,
      subscriptionId: subscription.id,
      updatedAt: new Date(),
    });
    
    console.log(`User ${userId} subscription updated: ${subscription.status}`);
  } catch (error) {
    console.error('Error updating subscription status:', error);
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  const userId = subscription.metadata?.userId;
  
  if (!userId) {
    console.error('No userId in subscription metadata');
    return;
  }

  try {
    await updateDoc(doc(db, 'users', userId), {
      subscribed: false,
      subscriptionStatus: 'canceled',
      subscriptionId: null,
      updatedAt: new Date(),
    });
    
    console.log(`User ${userId} subscription canceled`);
  } catch (error) {
    console.error('Error canceling subscription:', error);
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription;
  
  if (!subscriptionId) return;

  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId as string);
    const userId = subscription.metadata?.userId;
    
    if (userId) {
      await updateDoc(doc(db, 'users', userId), {
        subscriptionStatus: 'active',
        lastPaymentDate: new Date(),
        updatedAt: new Date(),
      });
      
      console.log(`Payment succeeded for user ${userId}`);
    }
  } catch (error) {
    console.error('Error handling payment success:', error);
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  const subscriptionId = invoice.subscription;
  
  if (!subscriptionId) return;

  try {
    const subscription = await stripe.subscriptions.retrieve(subscriptionId as string);
    const userId = subscription.metadata?.userId;
    
    if (userId) {
      await updateDoc(doc(db, 'users', userId), {
        subscriptionStatus: 'past_due',
        updatedAt: new Date(),
      });
      
      console.log(`Payment failed for user ${userId}`);
    }
  } catch (error) {
    console.error('Error handling payment failure:', error);
  }
}
