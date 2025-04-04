import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PaperProvider } from 'react-native-paper'

const Provider = ({children}:{children: React.ReactNode}) => {
  return (
    <NavigationContainer>
    <SafeAreaProvider>
      <PaperProvider
        theme={{
          colors: {
            primary: '#36618E',
            secondary: '#535F70',
            background: '#FFFFFF',
            tertiary: '#6B5778',
            outline: '#6B5778',
            placeholder: '#D1E4FF',
          },
          animation: {
            defaultAnimationDuration: 1000,
            scale: 10,
          },
          roundness: 4,
          mode: 'adaptive',
        }}>
          {children}
          </PaperProvider>
          </SafeAreaProvider>
          </NavigationContainer>
  )
}

export default Provider

const styles = StyleSheet.create({

})