import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { testFirebaseConfig, testFirebaseAuth } from '../../utils/firebaseTest';

export const FirebaseDebug: React.FC = () => {
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const runDebug = async () => {
      setLoading(true);
      
      try {
        // Test Firebase configuration
        const configTest = await testFirebaseConfig();
        const authTest = await testFirebaseAuth();
        
        // Gather debug information
        const info = {
          authInstance: !!auth,
          authApp: !!auth?.app,
          authConfig: auth?.config,
          dbInstance: !!db,
          configTest,
          authTest,
          timestamp: new Date().toISOString()
        };
        
        setDebugInfo(info);
      } catch (error) {
        setDebugInfo({ error: error.message });
      } finally {
        setLoading(false);
      }
    };
    
    runDebug();
  }, []);

  if (loading) {
    return <div className="p-4 bg-blue-100 text-blue-800 rounded">Loading Firebase debug info...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg text-sm">
      <h3 className="font-bold mb-2">Firebase Debug Information</h3>
      <pre className="whitespace-pre-wrap text-xs">
        {JSON.stringify(debugInfo, null, 2)}
      </pre>
    </div>
  );
};
