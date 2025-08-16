import { FC, ReactNode } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Colors } from '../../constants/Colors';

interface CustomViewProp {
  children: ReactNode;
  style?: ViewStyle;
}

const CustomView: FC<CustomViewProp> = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});


export default CustomView;