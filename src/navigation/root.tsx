import * as React from 'react';
// UI
import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {NativeStackScreenProps} from 'react-native-screens/native-stack';
// Screens
import LibraryScreen from '../screens/LibraryScreen.tsx';
import HomeScreen from '../screens/HomeScreen.tsx';
import CinemaScreen from '../screens/CinemaScreen.tsx';
// Config
import setRemoteConfig from '../remoteConfigs/config.ts';

type ScreenParams = {
  mediaId: Media['id'];
  isContinue?: boolean;
};

type RootStackParamList = {
  HomeScreen: undefined;
  CinemaScreen: ScreenParams;
  LibraryScreen: ScreenParams;
};

export type CinemaScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CinemaScreen'
>;

export type LibraryScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LibraryScreen'
>;
const Stack = createStackNavigator<RootStackParamList>();

// Setup remote configuration
setRemoteConfig();

const RootNavigator = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CinemaScreen" component={CinemaScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'black',
    flex: 1,
  },
});
export default RootNavigator;
