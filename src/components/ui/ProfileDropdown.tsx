import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { User, LogOut, UserPlus, LogIn } from 'lucide-react';

interface ProfileDropdownProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ 
  onSignIn, 
  onSignUp 
}) => {
  const { user, userData, isGuest, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await logout();
    setIsOpen(false);
  };

  const handleSignIn = () => {
    onSignIn();
    setIsOpen(false);
  };

  const handleSignUp = () => {
    onSignUp();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Profile Icon Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm border border-white/30"
      >
        {user || isGuest ? (
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-purple-600 font-bold text-sm shadow-md">
            {userData?.username?.charAt(0).toUpperCase() || 'G'}
          </div>
        ) : (
          <User className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {/* User Info */}
          {(user || isGuest) && (
            <div className="px-4 py-3 border-b border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {userData?.username?.charAt(0).toUpperCase() || 'G'}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {userData?.username || 'Guest User'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {isGuest ? 'Guest Mode' : userData?.email}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Menu Items */}
          <div className="py-1">
            {!user && !isGuest && (
              <>
                <button
                  onClick={handleSignIn}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogIn className="w-4 h-4 mr-3" />
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <UserPlus className="w-4 h-4 mr-3" />
                  Sign Up
                </button>
              </>
            )}

            {isGuest && (
              <>
                <button
                  onClick={handleSignIn}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogIn className="w-4 h-4 mr-3" />
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <UserPlus className="w-4 h-4 mr-3" />
                  Sign Up
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Exit Guest Mode
                </button>
              </>
            )}

            {user && (
              <>
                <div className="px-4 py-2 text-xs text-gray-500">
                  <div className="flex justify-between">
                    <span>XP:</span>
                    <span className="font-medium">{userData?.xp || 0}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hearts:</span>
                    <span className="font-medium">{userData?.hearts || 5}</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 my-1"></div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
