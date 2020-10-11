import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'context';

export const CustomHeader = ({
  headerStyle,
  headerLeft,
  titleStyle,
  title,
  headerRight,
}) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={{
      ...styles.headerStyle,
      ...headerStyle,
      backgroundColor: colors.base
    }}>
      <TouchableOpacity style={{ ...styles.headerLeft, ...headerLeft }}>
        <Text
          style={{
            ...styles.buttonText,
            color: colors.text
          }}
          onPress={() => navigation.goBack()}
        > 􀄪
      </Text>
      </TouchableOpacity>

      <Text style={{
        ...styles.titleStyle,
        ...titleStyle,
        color: colors.primary,
      }}>{title}
      </Text>

      <TouchableOpacity style={{ ...styles.headerRight, ...headerRight }}>
        <Text
          style={{
            ...styles.buttonText,
            color: colors.text
          }}
          onPress={() => navigation.openDrawer()}
        >􀅴
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    paddingTop: 40,
    padding: 10,
    marginBottom: -30,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 120,
  },
  headerLeft: {
    padding: 15,
  },
  headerRight: {
    padding: 15,
  },

  titleStyle: {
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 28,
    letterSpacing: 0.36,
  },
  buttonText: {
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 20,
    letterSpacing: 0.6,
    textAlign: 'center',
    lineHeight: 22
  }
});
