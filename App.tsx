import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


import Navigation from './navigation/Navigation.js'

export default function App() {

  return (
    <Provider store={Store}>
      <Navigation  />
      <StatusBar />
    </Provider>
  );
}
