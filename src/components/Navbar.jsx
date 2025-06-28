// src/components/Navbar.jsx
import { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchQuery);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };


  if (location.pathname === '/login' || location.pathname === '/register') {
    return null;
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Left section - Logo and Search */}
          <div className="flex items-center space-x-4">
            {/* LinkedIn Logo */}
            <Link to="/" className="flex items-center">
              <div className="bg-blue-600 text-white font-bold text-xl px-2 py-1 rounded">
                in
              </div>
            </Link>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-blue-50 border border-transparent rounded-md text-sm placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-200 focus:ring-1 focus:ring-blue-200"
                />
              </div>
            </form>
          </div>

          {/* Right section - Navigation Icons */}
          {currentUser && (
            <div className="flex items-center space-x-6">
              {/* Navigation Items */}
              <Link
                to="/"
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs transition-colors ${
                  isActive('/') 
                    ? 'text-gray-900 bg-gray-100' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Home</span>
              </Link>

              <Link
                  to="/network"
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs transition-colors ${
                    location.pathname === '/network' 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>My Network</span>
                </Link>

                <Link
                  to="/jobs"
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs transition-colors ${
                    location.pathname === '/jobs' 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" />
                  </svg>
                  <span>Jobs</span>
                </Link>

              <div className="flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs text-gray-600 hover:text-gray-900 cursor-pointer transition-colors">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span>Messaging</span>
              </div>

              <Link
                to="/notifications"
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs transition-colors ${
                  isActive('/notifications') 
                    ? 'text-gray-900 bg-gray-100' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <div className="relative">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5V7a9.5 9.5 0 0119 0v10z" />
                  </svg>
                  {/* Notification badge */}
                  <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 text-white text-xxs flex items-center justify-center">
                    3
                  </span>
                </div>
                <span>Notifications</span>
              </Link>

              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-md text-xs transition-colors ${
                    isActive('/profile') 
                      ? 'text-gray-900 bg-gray-100' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="h-6 w-6 bg-gray-300 rounded-full flex items-center justify-center">
                    {currentUser?.profilePicture ? (
                      <img
                        src={currentUser.profilePicture}
                        alt={currentUser.name}
                        className="h-6 w-6 rounded-full object-cover"
                      />
                    ) : (
                      <span className="text-xs font-medium text-gray-600">
                        {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
                      </span>
                    )}
                  </div>
                  <span>Me</span>
                  <svg 
                    className={`h-3 w-3 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Profile Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                          {currentUser?.profilePicture ? (
                            <img
                              src={currentUser.profilePicture}
                              alt={currentUser.name}
                              className="h-12 w-12 rounded-full object-cover"
                            />
                          ) : (
                            <span className="text-lg font-medium text-gray-600">
                              {currentUser?.name?.charAt(0)?.toUpperCase() || 'U'}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{currentUser?.name || 'User'}</p>
                          <p className="text-sm text-gray-500">{currentUser?.headline || 'Professional'}</p>
                        </div>
                      </div>
                      <Link
                        to="/profile"
                        className="mt-3 block w-full text-center py-1 px-4 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        View Profile
                      </Link>
                    </div>
                    
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Account
                      </div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Settings & Privacy
                      </div>
                      <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer">
                        Help
                      </div>
                      <div className="border-t border-gray-200 my-1"></div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;