/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {PropsWithChildren} from 'react';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app/AppNavigation';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const CustomStatusBar = ({backgroundColor, barStyle}: any) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        barStyle={barStyle}
        backgroundColor={backgroundColor}
      />
    </View>
  );
};
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <CustomStatusBar backgroundColor={'grey'} barStyle={'dark-content'} />
        <SafeAreaView
          style={{
            flex: 1
          }}>
          <AppNavigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
