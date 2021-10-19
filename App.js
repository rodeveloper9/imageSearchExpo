import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  useColorScheme
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Listing from './src/components/listing/Listing';
import ListingDetails from './src/components/details/Details';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore()
const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Listing" component={Listing} options={{ title: 'Home' }} />
            <Stack.Screen name="Details" component={ListingDetails} options={{ title: 'Image Details' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

