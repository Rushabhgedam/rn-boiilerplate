import { Alert, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { Container } from '../../components';

const LoginScreen: React.ComponentType<{
  route: RouteProp<ParamListBase, 'loginscreen'>;
  navigation: any;
}>  = () => {
  return (
    <Container>
      <Text>LoginScreen</Text>
    </Container>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})