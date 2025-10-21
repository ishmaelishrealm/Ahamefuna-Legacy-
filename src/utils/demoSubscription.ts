import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export const activateDemoSubscription = async (userId: string, planType: 'monthly' | 'yearly') => {
  try {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      subscription: {
        active: true,
        plan: planType,
        startDate: new Date().toISOString(),
        demo: true // Mark as demo subscription
      },
      updatedAt: new Date()
    });
    
    console.log('Demo subscription activated for user:', userId, 'plan:', planType);
    return true;
  } catch (error) {
    console.error('Error activating demo subscription:', error);
    return false;
  }
};

export const deactivateDemoSubscription = async (userId: string) => {
  try {
    const userRef = doc(db, 'users', userId);
    
    await updateDoc(userRef, {
      subscription: {
        active: false,
        plan: null,
        startDate: null,
        demo: false
      },
      updatedAt: new Date()
    });
    
    console.log('Demo subscription deactivated for user:', userId);
    return true;
  } catch (error) {
    console.error('Error deactivating demo subscription:', error);
    return false;
  }
};
