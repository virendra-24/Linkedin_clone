// src/context/AuthContext.jsx
import { createContext, useReducer, useEffect } from 'react';


export const AuthContext = createContext();


const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload,
        loading: false
      };
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        loading: false
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'UPDATE_USER':
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload }
      };
    default:
      return state;
  }
};


const initialState = {
  currentUser: null,
  loading: true
};


export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

 
  useEffect(() => {
    const checkAuthState = () => {
      try {
      
        const savedUser = sessionStorage.getItem('linkedinUser');
        if (savedUser) {
          const user = JSON.parse(savedUser);
          dispatch({ type: 'LOGIN', payload: user });
        } else {
          dispatch({ type: 'SET_LOADING', payload: false });
        }
      } catch (error) {
        console.error('Error checking auth state:', error);
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

   
    setTimeout(checkAuthState, 500);
  }, []);

 
  const login = (userData) => {
    try {
     
      const user = {
        id: userData.id || Date.now().toString(),
        name: userData.name || 'Demo User',
        email: userData.email,
        headline: userData.headline || 'Professional',
        profilePicture: userData.profilePicture || null,
        location: userData.location || 'Global',
        connections: userData.connections || 500,
        about: userData.about || 'Passionate professional with experience in various fields.',
        experience: userData.experience || [],
        education: userData.education || [],
        skills: userData.skills || []
      };

      
      sessionStorage.setItem('linkedinUser', JSON.stringify(user));
      
      
      dispatch({ type: 'LOGIN', payload: user });
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, error: 'Login failed' };
    }
  };

  
  const logout = () => {
    try {
      
      sessionStorage.removeItem('linkedinUser');
      
      
      dispatch({ type: 'LOGOUT' });
      
      return { success: true };
    } catch (error) {
      console.error('Logout error:', error);
      return { success: false, error: 'Logout failed' };
    }
  };


  const register = (userData) => {
    try {
  
      const user = {
        id: Date.now().toString(),
        name: userData.firstName + ' ' + userData.lastName,
        email: userData.email,
        headline: 'New Professional',
        profilePicture: null,
        location: 'Global',
        connections: 0,
        about: 'New to the platform!',
        experience: [],
        education: [],
        skills: []
      };

     
      sessionStorage.setItem('linkedinUser', JSON.stringify(user));
      
      dispatch({ type: 'LOGIN', payload: user });
      
      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, error: 'Registration failed' };
    }
  };


  const updateUser = (updates) => {
    try {
      const updatedUser = { ...state.currentUser, ...updates };
      
      sessionStorage.setItem('linkedinUser', JSON.stringify(updatedUser));
      
      dispatch({ type: 'UPDATE_USER', payload: updates });
      
      return { success: true };
    } catch (error) {
      console.error('Update user error:', error);
      return { success: false, error: 'Update failed' };
    }
  };

  const setLoading = (loading) => {
    dispatch({ type: 'SET_LOADING', payload: loading });
  };

  const isAuthenticated = () => {
    return !!state.currentUser;
  };

  const getCurrentUser = () => {
    return state.currentUser;
  };

  const value = {
    currentUser: state.currentUser,
    loading: state.loading,
    login,
    logout,
    register,
    updateUser,
    setLoading,
    isAuthenticated,
    getCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
