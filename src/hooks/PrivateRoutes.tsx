import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useLoginContext } from './LoginContext'; // Sesuaikan path impor sesuai dengan struktur proyek Anda

const PrivateRoute: React.FC = () => {
  const { isLogin } = useLoginContext();

  return isLogin ? <Outlet /> : <Navigate to='/' />;
};

export default PrivateRoute;
