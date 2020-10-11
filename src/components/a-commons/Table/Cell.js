import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'context';

export const Cell = ({ value, style, textStyle }) => {
  const { colors } = useTheme();

  return (
    <View style={{ ...styles.cellStyle, borderColor: colors.borderColor, ...style }} >
      <Text
        numberOfLines={1}
        style={{ ...styles.cellTextStyle, color: colors.text, ...textStyle }}>{value}</Text>
    </View >
  )
}

const styles = StyleSheet.create({
  cellStyle: {
    flex: 1,
    padding: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 0.5,
  },
  cellTextStyle: {
    fontFamily: 'SFProDisplay-Bold',
    textTransform: 'capitalize',
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'center',
  },
})
