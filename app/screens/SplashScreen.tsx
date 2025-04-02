import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import { zomato } from '../assets';

const SplashScreen: React.ComponentType<{
  route: RouteProp<ParamListBase, 'splashscreen'>;
  navigation: any;
}> = ({navigation}) => {

    
  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('authstack');
    }, 1000);
  }, []);
  return (
    <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image source={zomato} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
