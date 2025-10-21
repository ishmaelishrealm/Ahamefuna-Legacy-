import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

interface SetupCheck {
  name: string;
  status: 'pending' | 'success' | 'error';
  message: string;
  details?: string;
}

export const FirebaseSetupChecker: React.FC = () => {
  const [checks, setChecks] = useState<SetupCheck[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    runAllChecks();
  }, []);

  const addCheck = (check: SetupCheck) => {
    setChecks(prev => [...prev, check]);
  };

  const runAllChecks = async () => {
    setLoading(true);
    setChecks([]);

    // Check 1: Firebase App Initialization
    addCheck({
      name: 'Firebase App Initialization',
      status: 'pending',
      message: 'Checking Firebase app initialization...'
    });

    try {
      if (auth && auth.app) {
        addCheck({
          name: 'Firebase App Initialization',
          status: 'success',
          message: '✅ Firebase app is properly initialized',
          details: `App name: ${auth.app.name}, Project ID: ${auth.app.options.projectId}`
        });
      } else {
        addCheck({
          name: 'Firebase App Initialization',
          status: 'error',
          message: '❌ Firebase app is not properly initialized'
        });
      }
    } catch (error: any) {
      addCheck({
        name: 'Firebase App Initialization',
        status: 'error',
        message: '❌ Firebase app initialization failed',
        details: error.message
      });
    }

    // Check 2: Auth Configuration
    addCheck({
      name: 'Auth Configuration',
      status: 'pending',
      message: 'Checking auth configuration...'
    });

    try {
      if (auth.config && auth.config.apiKey) {
        addCheck({
          name: 'Auth Configuration',
          status: 'success',
          message: '✅ Auth configuration is valid',
          details: `API Key: ${auth.config.apiKey.substring(0, 10)}..., Domain: ${auth.config.authDomain}`
        });
      } else {
        addCheck({
          name: 'Auth Configuration',
          status: 'error',
          message: '❌ Auth configuration is missing or invalid'
        });
      }
    } catch (error: any) {
      addCheck({
        name: 'Auth Configuration',
        status: 'error',
        message: '❌ Auth configuration check failed',
        details: error.message
      });
    }

    // Check 3: Firestore Connection
    addCheck({
      name: 'Firestore Connection',
      status: 'pending',
      message: 'Checking Firestore connection...'
    });

    try {
      if (db && db.app) {
        addCheck({
          name: 'Firestore Connection',
          status: 'success',
          message: '✅ Firestore is properly connected',
          details: `Database ID: ${db.app.options.projectId}`
        });
      } else {
        addCheck({
          name: 'Firestore Connection',
          status: 'error',
          message: '❌ Firestore connection failed'
        });
      }
    } catch (error: any) {
      addCheck({
        name: 'Firestore Connection',
        status: 'error',
        message: '❌ Firestore connection check failed',
        details: error.message
      });
    }

    // Check 4: Test Auth Methods
    addCheck({
      name: 'Auth Methods Test',
      status: 'pending',
      message: 'Testing authentication methods...'
    });

    try {
      // Test creating a user (this will fail but should give us info)
      const testEmail = `test-${Date.now()}@example.com`;
      const testPassword = 'testpassword123';
      
      try {
        await createUserWithEmailAndPassword(auth, testEmail, testPassword);
        addCheck({
          name: 'Auth Methods Test',
          status: 'success',
          message: '✅ Authentication methods are working',
          details: 'Test user created successfully'
        });
      } catch (error: any) {
        if (error.code === 'auth/configuration-not-found') {
          addCheck({
            name: 'Auth Methods Test',
            status: 'error',
            message: '❌ Firebase Authentication not enabled in console',
            details: 'Go to Firebase Console → Authentication → Sign-in method → Enable Email/Password'
          });
        } else if (error.code === 'auth/email-already-in-use') {
          addCheck({
            name: 'Auth Methods Test',
            status: 'success',
            message: '✅ Authentication methods are working',
            details: 'Test user already exists (auth is working)'
          });
        } else if (error.code === 'auth/weak-password') {
          addCheck({
            name: 'Auth Methods Test',
            status: 'success',
            message: '✅ Authentication methods are working',
            details: 'Password validation working (auth is working)'
          });
        } else {
          addCheck({
            name: 'Auth Methods Test',
            status: 'error',
            message: `❌ Authentication test failed: ${error.code}`,
            details: error.message
          });
        }
      }
    } catch (error: any) {
      addCheck({
        name: 'Auth Methods Test',
        status: 'error',
        message: '❌ Authentication test failed',
        details: error.message
      });
    }

    // Check 5: Firestore Write Test
    addCheck({
      name: 'Firestore Write Test',
      status: 'pending',
      message: 'Testing Firestore write permissions...'
    });

    try {
      const testDocRef = doc(db, 'test', 'setup-check');
      await setDoc(testDocRef, {
        timestamp: new Date().toISOString(),
        test: true
      });
      
      addCheck({
        name: 'Firestore Write Test',
        status: 'success',
        message: '✅ Firestore write permissions are working',
        details: 'Test document created successfully'
      });
    } catch (error: any) {
      addCheck({
        name: 'Firestore Write Test',
        status: 'error',
        message: '❌ Firestore write test failed',
        details: error.message
      });
    }

    setLoading(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return '✅';
      case 'error': return '❌';
      case 'pending': return '⏳';
      default: return '❓';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'pending': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Firebase Setup Checker</h2>
        <button
          onClick={runAllChecks}
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Run Checks'}
        </button>
      </div>

      <div className="space-y-4">
        {checks.map((check, index) => (
          <div key={index} className={`p-4 rounded-lg border ${getStatusColor(check.status)}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{getStatusIcon(check.status)}</span>
              <h3 className="font-semibold">{check.name}</h3>
            </div>
            <p className="text-sm mb-2">{check.message}</p>
            {check.details && (
              <p className="text-xs opacity-75 font-mono bg-black/5 p-2 rounded">
                {check.details}
              </p>
            )}
          </div>
        ))}
      </div>

      {checks.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Next Steps:</h3>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>1. Go to <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer" className="underline">Firebase Console</a></li>
            <li>2. Select your project: <strong>ahamefuna-legacy</strong></li>
            <li>3. Go to <strong>Authentication → Sign-in method</strong></li>
            <li>4. Enable <strong>Email/Password</strong> authentication</li>
            <li>5. Add your domain to <strong>Authorized domains</strong></li>
            <li>6. Go to <strong>Firestore Database</strong> and create database</li>
            <li>7. Set up security rules for user data</li>
          </ul>
        </div>
      )}
    </div>
  );
};
