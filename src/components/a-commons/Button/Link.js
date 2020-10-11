import React, { useCallback } from 'react'
import { Text, StyleSheet, Linking, Alert, TouchableOpacity } from 'react-native';
import { useTheme } from 'context';

export const Link = ({
  style,
  children,
  url,

}) => {
  const { colors } = useTheme();
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      onPress={handlePress}
    >
      <Text
        style={{
          ...styles.linkStyle,
          color: colors.text,
          ...style
        }}
      >{children}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  linkStyle: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: 0.60,
  }
})


