import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ForgetPasswordScreen, LoginScreen, RegisterScreen} from '../screens';
import AuthProvider from '../contexts/AuthProvider';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <AuthProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="registerscreen" component={RegisterScreen} />
        <Stack.Screen
          name="forgetpasswordscreen"
          component={ForgetPasswordScreen}
        />
      </Stack.Navigator>
    </AuthProvider>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
