import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider, useAuth } from './routes/context/Auth'
import Route from './routes'
import { COLORS } from './theme/colors'
import {  Portal as PaperPortal, Provider as PaperProvider } from 'react-native-paper';
import {  MyProvider } from './Context'

export default function App() {
  return (
    <PaperProvider>
      <PaperPortal>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.ANTI_FLASH_WHITE }}>
          <AuthProvider>
            <MyProvider >
            <NavigationContainer>
              <Route />
            </NavigationContainer>
            </MyProvider>
          </AuthProvider>
        </SafeAreaView>
      </PaperPortal>
    </PaperProvider>
  )
}