import { loadStripe, Stripe } from '@stripe/stripe-js';

// Stripe configuration
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY || 'pk_test_...';
export const STRIPE_SECRET_KEY = import.meta.env.VITE_STRIPE_SECRET_KEY || 'sk_test_...';

// Initialize Stripe
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLIC_KEY);
  }
  return stripePromise;
};

// Subscription plans
export const SUBSCRIPTION_PLANS = {
  monthly: {
    priceId: 'price_monthly_5_99', // Replace with your actual Stripe price ID
    amount: 599, // $5.99 in cents
    interval: 'month',
    name: 'Monthly Premium',
    description: 'Unlimited hearts, XP boost, feedback page, and more!'
  },
  yearly: {
    priceId: 'price_yearly_39_99', // Replace with your actual Stripe price ID
    amount: 3999, // $39.99 in cents
    interval: 'year',
    name: 'Yearly Premium',
    description: 'Save 44%! All premium features for a full year',
    savings: 'Save $32.89/year'
  }
} as const;

// Premium features
export const PREMIUM_FEATURES = [
  {
    icon: '❤️',
    title: 'Unlimited Hearts',
    description: 'Never run out of hearts - learn without limits!'
  },
  {
    icon: '⚡',
    title: '1.42x XP Boost',
    description: 'Earn 42% more XP and climb the leaderboard faster'
  },
  {
    icon: '📊',
    title: 'Personal Feedback Page',
    description: 'Get detailed insights on your weak areas and improvement tips'
  },
  {
    icon: '👑',
    title: 'Crown Badge',
    description: 'Show your premium status with a crown next to your name'
  },
  {
    icon: '🏆',
    title: 'Premium Leaderboard',
    description: 'Compete with other premium users for exclusive rewards'
  },
  {
    icon: '🎯',
    title: 'Advanced Analytics',
    description: 'Track your learning progress with detailed statistics'
  }
];
