// src/App.jsx
import { useContext } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NetworkPage from './pages/NetworkPage';
import JobsPage from './pages/JobsPage';

import Navbar from './components/Navbar';

function App() {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  };

  const PublicRoute = ({ children }) => {
    if (currentUser) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Conditional container based on page type */}
      <div className={isAuthPage ? "w-full" : "container mx-auto px-4 py-6 max-w-7xl"}>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Profile Route */}
          <Route
            path="/profile/:userId?"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Additional Protected Routes */}
          <Route
            path="/network"
            element={
              <ProtectedRoute>
                <NetworkPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <JobsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/messaging"
            element={
              <ProtectedRoute>
                <div className="text-center py-20">
                  <h2 className="text-2xl font-bold text-gray-900">Messaging</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />

          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <div className="text-center py-20">
                  <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
                  <p className="text-gray-600 mt-2">Coming soon...</p>
                </div>
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="text-center py-20">
                <h2 className="text-4xl font-bold text-gray-900">404</h2>
                <p className="text-gray-600 mt-2">Page not found</p>
                <Navigate to="/" replace />
              </div>
            }
          />
        </Routes>
      </div>

      {/* Optional: Add a footer for authenticated users */}
      {currentUser && !isAuthPage && (
        <footer className="bg-white border-t border-gray-200 mt-auto">
          <div className="container mx-auto px-4 py-6 max-w-7xl">
            <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-600">
              <a href="#" className="hover:text-blue-600">About</a>
              <a href="#" className="hover:text-blue-600">Accessibility</a>
              <a href="#" className="hover:text-blue-600">Help Center</a>
              <a href="#" className="hover:text-blue-600">Privacy & Terms</a>
              <a href="#" className="hover:text-blue-600">Ad Choices</a>
              <a href="#" className="hover:text-blue-600">Advertising</a>
              <a href="#" className="hover:text-blue-600">Business Services</a>
              <a href="#" className="hover:text-blue-600">Get the LinkedIn app</a>
              <a href="#" className="hover:text-blue-600">More</a>
            </div>
            <div className="text-center mt-4 text-xs text-gray-500">
              LinkedIn Clone © 2024
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;