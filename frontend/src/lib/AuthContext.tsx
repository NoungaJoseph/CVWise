import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
  title: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  summary?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: UserProfile | null;
  isNewUser: boolean;
  login: (email?: string, name?: string) => void;
  logout: () => void;
  signup: (name: string, email: string) => void;
  updateUser: (info: Partial<UserProfile>) => void;
  clearNewUser: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
      const savedUser = localStorage.getItem('user_profile');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }
  }, []);

  const login = (email?: string, name?: string) => {
    setIsAuthenticated(true);
    setIsNewUser(false);
    localStorage.setItem('isAuthenticated', 'true');
    if (email || name) {
      const profile: UserProfile = { name: name || '', email: email || '', phone: '', title: '', location: '' };
      setUser(profile);
      localStorage.setItem('user_profile', JSON.stringify(profile));
    }
  };

  const signup = (name: string, email: string) => {
    setIsAuthenticated(true);
    setIsNewUser(true);
    localStorage.setItem('isAuthenticated', 'true');
    const profile: UserProfile = { name, email, phone: '', title: '', location: '' };
    setUser(profile);
    localStorage.setItem('user_profile', JSON.stringify(profile));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setIsNewUser(false);
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user_profile');
  };

  const updateUser = (info: Partial<UserProfile>) => {
    setUser(prev => {
      const updated = { ...(prev || { name: '', email: '', phone: '', title: '', location: '' }), ...info };
      localStorage.setItem('user_profile', JSON.stringify(updated));
      return updated;
    });
  };

  const clearNewUser = () => setIsNewUser(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, isNewUser, login, logout, signup, updateUser, clearNewUser }}>
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
