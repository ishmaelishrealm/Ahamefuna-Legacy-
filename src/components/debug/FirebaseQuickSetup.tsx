import React from 'react';

export const FirebaseQuickSetup: React.FC = () => {
  return (
    <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
      <h3 className="text-lg font-bold text-yellow-800 mb-4">
        🔧 Firebase Setup Required
      </h3>
      
      <div className="space-y-3 text-sm text-yellow-700">
        <div className="flex items-start gap-2">
          <span className="font-bold">1.</span>
          <div>
            <p>Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Firebase Console</a></p>
            <p className="text-xs opacity-75">Select project: <strong>ahamefuna-legacy</strong></p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <span className="font-bold">2.</span>
          <div>
            <p>Enable Authentication:</p>
            <p className="text-xs opacity-75">Authentication → Sign-in method → Enable Email/Password</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <span className="font-bold">3.</span>
          <div>
            <p>Add Authorized Domains:</p>
            <p className="text-xs opacity-75">Authentication → Settings → Add: localhost, your-vercel-domain.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <span className="font-bold">4.</span>
          <div>
            <p>Create Firestore Database:</p>
            <p className="text-xs opacity-75">Firestore Database → Create database → Start in test mode</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-yellow-100 rounded">
        <p className="text-xs text-yellow-800">
          <strong>Need help?</strong> Check the <code>FIREBASE_SETUP.md</code> file in your project root for detailed instructions.
        </p>
      </div>
    </div>
  );
};
