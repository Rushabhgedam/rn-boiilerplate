import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/SplashScreen';
import AuthStack from './AuthStack';



const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
        <Stack.Screen component={SplashScreen} name='splashscreen'/>
        <Stack.Screen component={AuthStack} name='authstack'/>
        {/* <Stack.Screen component={UserStack} name='userstack'/> */}
    </Stack.Navigator>
  )
}

export default AppNavigation

const styles = StyleSheet.create({})