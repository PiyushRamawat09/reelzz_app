import 'react-native-gesture-handler'; // for animations
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform, SafeAreaView, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

GoogleSignin.configure({
  webClientId:
    '255324056609-mn037em7hvb4a2gl0ket24m56ns4lodi.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  // iosClientId : ''
}); // configuring google signin cred globally.

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'ios'}
        backgroundColor="transparent"
      />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
