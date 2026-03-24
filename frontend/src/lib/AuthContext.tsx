import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser, getCurrentUser } from './api';

export interface UserProfile {
  userId?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  title?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  isNewUser: boolean;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (firstName: string, lastName: string, email: string, password: string) => Promise<void>;
  updateUser: (info: Partial<UserProfile>) => void;
  clearNewUser: () => void;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('auth_token');
    if (savedToken) {
      setToken(savedToken);
      setIsLoading(true);
      getCurrentUser(savedToken)
        .then(userData => {
          setUser({
            userId: userData.userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email
          });
          setIsAuthenticated(true);
        })
        .catch(() => {
          // Token invalid, clear it
          localStorage.removeItem('auth_token');
          setToken(null);
          setIsAuthenticated(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await loginUser(email, password);
      const newToken = response.token;
      setToken(newToken);
      localStorage.setItem('auth_token', newToken);
      
      const userData: UserProfile = {
        userId: response.userId,
        firstName: response.user.firstName || '',
        lastName: response.user.lastName || '',
        email: response.user.email
      };
      setUser(userData);
      setIsAuthenticated(true);
      setIsNewUser(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (firstName: string, lastName: string, email: string, password: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await registerUser(email, password, firstName, lastName);
      const newToken = response.token;
      setToken(newToken);
      localStorage.setItem('auth_token', newToken);
      
      const userData: UserProfile = {
        userId: response.userId,
        firstName: response.user.firstName,
        lastName: response.user.lastName,
        email: response.user.email
      };
      setUser(userData);
      setIsAuthenticated(true);
      setIsNewUser(true);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Signup failed';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    setIsNewUser(false);
    setError(null);
    localStorage.removeItem('auth_token');
  };

  const updateUser = (info: Partial<UserProfile>) => {
    setUser(prev => {
      const updated = { ...(prev || { firstName: '', lastName: '', email: '' }), ...info };
      return updated;
    });
  };

  const clearNewUser = () => setIsNewUser(false);
  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isNewUser, token, isLoading, error, login, logout, signup, updateUser, clearNewUser, clearError }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
