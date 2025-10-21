import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

export interface HeartsData {
  currentHearts: number;
  lastResetTime: number; // timestamp
  maxHearts: number;
}

export const HEARTS_RESET_HOURS = 7;
export const MAX_HEARTS = 5;

/**
 * Calculate how many hearts should be restored based on time elapsed
 */
export const calculateHeartsFromTime = (lastResetTime: number, currentTime: number = Date.now()): number => {
  const timeElapsed = currentTime - lastResetTime;
  const hoursElapsed = timeElapsed / (1000 * 60 * 60); // Convert ms to hours
  
  // Calculate how many full resets have occurred
  const fullResets = Math.floor(hoursElapsed / HEARTS_RESET_HOURS);
  
  if (fullResets > 0) {
    return MAX_HEARTS; // Full hearts restored
  }
  
  return 0; // No hearts restored yet
};

/**
 * Get current hearts status for a user
 */
export const getCurrentHeartsStatus = async (userId: string): Promise<HeartsData> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const heartsData = userData.heartsData as HeartsData;
      
      if (heartsData) {
        const currentTime = Date.now();
        const heartsToRestore = calculateHeartsFromTime(heartsData.lastResetTime, currentTime);
        
        if (heartsToRestore > 0) {
          // Update hearts in database
          const newHeartsData: HeartsData = {
            currentHearts: MAX_HEARTS,
            lastResetTime: currentTime,
            maxHearts: MAX_HEARTS
          };
          
          await updateDoc(userRef, {
            hearts: MAX_HEARTS,
            heartsData: newHeartsData
          });
          
          return newHeartsData;
        }
        
        return heartsData;
      }
    }
    
    // Initialize hearts data for new users
    const initialHeartsData: HeartsData = {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
    
    await updateDoc(userRef, {
      hearts: MAX_HEARTS,
      heartsData: initialHeartsData
    });
    
    return initialHeartsData;
  } catch (error) {
    console.error('Error getting hearts status:', error);
    return {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
  }
};

/**
 * Update hearts when user loses hearts
 */
export const updateHearts = async (userId: string, heartsLost: number): Promise<HeartsData> => {
  try {
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      const heartsData = userData.heartsData as HeartsData || {
        currentHearts: MAX_HEARTS,
        lastResetTime: Date.now(),
        maxHearts: MAX_HEARTS
      };
      
      const newHearts = Math.max(0, heartsData.currentHearts - heartsLost);
      
      const updatedHeartsData: HeartsData = {
        ...heartsData,
        currentHearts: newHearts
      };
      
      await updateDoc(userRef, {
        hearts: newHearts,
        heartsData: updatedHeartsData
      });
      
      return updatedHeartsData;
    }
    
    return {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
  } catch (error) {
    console.error('Error updating hearts:', error);
    return {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
  }
};

/**
 * Get time until next hearts reset
 */
export const getTimeUntilNextReset = (lastResetTime: number): number => {
  const currentTime = Date.now();
  const timeElapsed = currentTime - lastResetTime;
  const hoursElapsed = timeElapsed / (1000 * 60 * 60);
  
  if (hoursElapsed >= HEARTS_RESET_HOURS) {
    return 0; // Hearts should be reset
  }
  
  const timeRemaining = HEARTS_RESET_HOURS - hoursElapsed;
  return timeRemaining * 60 * 60 * 1000; // Convert to milliseconds
};

/**
 * Format time remaining for display
 */
export const formatTimeRemaining = (milliseconds: number): string => {
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

/**
 * Guest mode hearts management
 */
export const getGuestHeartsStatus = (): HeartsData => {
  try {
    const saved = localStorage.getItem('afroslang_guest_hearts');
    if (saved) {
      const heartsData = JSON.parse(saved) as HeartsData;
      const currentTime = Date.now();
      const heartsToRestore = calculateHeartsFromTime(heartsData.lastResetTime, currentTime);
      
      if (heartsToRestore > 0) {
        const newHeartsData: HeartsData = {
          currentHearts: MAX_HEARTS,
          lastResetTime: currentTime,
          maxHearts: MAX_HEARTS
        };
        localStorage.setItem('afroslang_guest_hearts', JSON.stringify(newHeartsData));
        return newHeartsData;
      }
      
      return heartsData;
    }
  } catch (error) {
    console.error('Error loading guest hearts:', error);
  }
  
  // Initialize guest hearts
  const initialHeartsData: HeartsData = {
    currentHearts: MAX_HEARTS,
    lastResetTime: Date.now(),
    maxHearts: MAX_HEARTS
  };
  
  localStorage.setItem('afroslang_guest_hearts', JSON.stringify(initialHeartsData));
  return initialHeartsData;
};

export const updateGuestHearts = (heartsLost: number): HeartsData => {
  try {
    const saved = localStorage.getItem('afroslang_guest_hearts');
    const heartsData = saved ? JSON.parse(saved) as HeartsData : {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
    
    const newHearts = Math.max(0, heartsData.currentHearts - heartsLost);
    const updatedHeartsData: HeartsData = {
      ...heartsData,
      currentHearts: newHearts
    };
    
    localStorage.setItem('afroslang_guest_hearts', JSON.stringify(updatedHeartsData));
    return updatedHeartsData;
  } catch (error) {
    console.error('Error updating guest hearts:', error);
    return {
      currentHearts: MAX_HEARTS,
      lastResetTime: Date.now(),
      maxHearts: MAX_HEARTS
    };
  }
};

/**
 * Get time until next heart reset (when all hearts will be restored)
 */
export const getTimeUntilNextReset = (lastResetTime: number): number => {
  const currentTime = Date.now();
  const timeSinceLastReset = currentTime - lastResetTime;
  const timePerHeart = HEARTS_RESET_HOURS * 60 * 60 * 1000 / MAX_HEARTS; // Time to gain one heart
  
  // Calculate how many hearts should have been restored since last reset
  const heartsRestoredSinceLastReset = Math.floor(timeSinceLastReset / timePerHeart);
  
  // Calculate the time when the next heart is due
  const nextHeartTime = lastResetTime + (heartsRestoredSinceLastReset + 1) * timePerHeart;
  
  return Math.max(0, nextHeartTime - currentTime);
};
