import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';

export const Navigation: FC = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
