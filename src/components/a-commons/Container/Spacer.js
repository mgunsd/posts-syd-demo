import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native';
//import Constants from 'expo-constants';
import { useTheme } from 'context';

export const Spacer = props => {
  const { colors } = useTheme();
  return (<View
    style={{
      ...styles.spacer,
      borderColor: colors.borderColor,
      ...props.style,
      borderBottomWidth: props.line ? 0.5 : 0
    }}>
    { props.children}
  </View >)
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
    minWidth: '90%'
  },
})