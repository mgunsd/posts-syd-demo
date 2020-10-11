import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { useTheme } from 'context';

export const LinkText = props => {
  const { colors } = useTheme();
  //const navigation = useNavigation();
  return (
    <Text
      onPress={props.onPress}
      {...props}
      style={{
        ...styles.link,
        color: colors.primary + 'BB',
        ...props.style,
      }}>
      {props.children}</Text>
  )
};

const styles = StyleSheet.create({
  link: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 26,
    letterSpacing: 0.60,
  }
});