import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth, { isLoggedIn } from '@/hooks/useAuth';

export const AuthContext = createContext<null>(null);

export const AuthProtectProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {

  const { user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn() && !user) {
      navigate('/login')
    }
  }, [user])

  return (
    <AuthContext.Provider value={null}>
      {user ? children : null}
    </AuthContext.Provider>
  )
}
