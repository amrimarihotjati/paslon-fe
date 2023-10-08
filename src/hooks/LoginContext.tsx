// LoginContext.tsx
import React, { createContext, useContext, useState } from 'react';

interface LoginContextType {
  isLogin: boolean;
  login: () => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextType | undefined>(undefined);

export const useLoginContext = (): LoginContextType => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLoginContext must be used within a LoginProvider');
  }
  return context;
};

export const LoginProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //Ubah Value
    const [isLogin, setIsLogin] = useState(true);
  
    const login = () => {
      setIsLogin(true);
    };
  
    const logout = () => {
      setIsLogin(false);
    };
  
    return (
      <LoginContext.Provider value={{ isLogin, login, logout }}>
        {children}
      </LoginContext.Provider>
    );
  };
  