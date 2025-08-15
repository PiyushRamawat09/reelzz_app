import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import SplashScreen from '../screens/auth/SplashScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';

export const authStack = [
  {
    name: 'SplashScreen',
    component: SplashScreen,
  },
  {
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    name: 'RegisterScreen',
    component: RegisterScreen,
  },
];

export const dashboradStack = [
  {
    name: 'HomeScreen',
    component: HomeScreen,
  },
];

export const mergedStack = [...authStack, ...dashboradStack];
