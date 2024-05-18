import { Text } from 'react-native'
import React from 'react'
import { useAuth } from './context/Auth';
import DashboardRoute from './dashboardRoute';
import LoginScreen from '../screens/auth';

export default function Route() {
  const { authData, loading } = useAuth();
  return (
    <>
      {loading ? <Text>Loading...</Text> : authData ? <DashboardRoute /> : <LoginScreen />}
    </>
  )
}