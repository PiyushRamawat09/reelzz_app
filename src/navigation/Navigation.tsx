import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { navigationRef } from '../utils/NavigationUtils';
import { SafeAreaView, StatusBar } from 'react-native';

export const Navigation: FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaView />
      <StatusBar
        barStyle={'dark-content'}
        translucent={false}
        backgroundColor={'white'}
      />
      <MainNavigator />
    </NavigationContainer>
  );
};
