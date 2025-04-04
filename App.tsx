/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type { PropsWithChildren } from 'react';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import {
  useSafeAreaInsets
} from 'react-native-safe-area-context';
import AppNavigation from './app/AppNavigation';
import Provider from './app/provider/RootProvider';
import { Text } from 'react-native-paper';

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
    <Provider>
      <CustomStatusBar backgroundColor={'grey'} barStyle={'dark-content'} />
      <SafeAreaView
        style={{
          flex: 1,
        }}>
        <AppNavigation />
      </SafeAreaView>
    </Provider>
  );
}


export default App;
