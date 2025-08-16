import { FC } from 'react';
import Home from '../assets/icons/home.png';
import HomeFocused from '../assets/icons/homeFocused.png';
import Profile from '../assets/icons/profile.png';
import ProfileFocused from '../assets/icons/profileFocused.png';
import { Image } from 'react-native';
import { bottomBarStyles } from '../styles/NavigationBarStyles';
import { Colors } from '../constants/Colors';

interface TabProps {
  name: string;
}

interface IconProps {
  focused: boolean;
}

const TabIcon: FC<TabProps> = ({ name }) => {
  return (
    <Image
      source={name === 'HomeScreen' ? Home : Profile}
      style={[bottomBarStyles.tabIcon, { tintColor: Colors.disabled }]}
    />
  );
};

const TabIconFocused: FC<TabProps> = ({ name }) => {
  return (
    <Image
      source={name === 'HomeScreen' ? HomeFocused : ProfileFocused}
      style={[bottomBarStyles.tabIcon, { tintColor: Colors.white }]}
    />
  );
};

export const HomeTabIcon: FC<IconProps> = ({ focused }) => {
  return focused ? (
    <TabIconFocused name="HomeScreen" />
  ) : (
    <TabIcon name="HomeScreen" />
  );
};

export const ProfileTabIcon: FC<IconProps> = ({ focused }) => {
  return focused ? (
    <TabIconFocused name="ProfileScreen" />
  ) : (
    <TabIcon name="ProfileScreen" />
  );
};
