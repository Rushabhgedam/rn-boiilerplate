import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import { zomato } from '../assets';
import Animated, { Easing, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { responsiveHeight, responsiveWidth } from '../Utils/dimensions';

const SplashScreen: React.ComponentType<{
  route: RouteProp<ParamListBase, 'splashscreen'>;
  navigation: any;
}> = ({navigation}) => {

  const loaderWidth = useSharedValue(0);
    
  useEffect(() => {
    loaderWidth.value = withTiming(100, {
      duration:4000,
      easing:Easing.linear,
    },()=>{
      runOnJS(navigation.replace)("authstack")
    })


  }, []);

  const loaderAnimatedStyle = useAnimatedStyle(()=>{
    return {
      width: `${loaderWidth.value}%`,
      height:10,
      backgroundColor:"#d20042"
    }
  })

  return (
    <View style={{  alignItems:"center", flex:1}}>
        <Image style={{width:100, height:100, resizeMode:"contain", marginTop: responsiveHeight(40)}} source={zomato} />
        <Animated.View style={{backgroundColor:"white",borderRadius:10, marginTop:responsiveHeight(35), overflow:"hidden", width: responsiveWidth(94)}}>
          <Animated.View style={loaderAnimatedStyle} />
        </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
