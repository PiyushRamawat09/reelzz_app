import 'react-native-gesture-handler'; // for animations
import React from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Navigation } from './src/navigation/Navigation';

GoogleSignin.configure({
  webClientId:
    '255324056609-mn037em7hvb4a2gl0ket24m56ns4lodi.apps.googleusercontent.com',
  forceCodeForRefreshToken: true,
  offlineAccess: false,
  // iosClientId : ''
}); // configuring google signin cred globally.

const App = () => {
  return <Navigation />;
};

export default App;
