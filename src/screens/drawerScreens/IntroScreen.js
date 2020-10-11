import React from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'context';
import {
  Screen,
  PrimaryButton,
  Heading,
  Title1,
} from 'components';

export const IntroScreen = ({ navigation }) => {
  const { dark, colors } = useTheme();
  return (
    <Screen>
      <Title1 style={styles.title}>Simple{'\n'}Posts List Demo</Title1>
      <Heading style={styles.heading}>
        by{'\n'}Mark Gundogdu
      </Heading >
      <PrimaryButton
        style={styles.button}
        text="Let's See   􀆓"
        onPress={() => navigation.navigate('Posts')}
      />
    </Screen >
  )
};

const styles = StyleSheet.create({
  title: {
    position: 'absolute',
    textAlign: 'center',
    top: 200,
  },
  heading: {
    position: 'absolute',
    top: '45%',
    fontFamily: 'SFProDisplay-Regular',
    fontSize: 24,
    letterSpacing: 0.6,
    textAlign: 'center',
    lineHeight: 40
  },
  button: {
    position: 'absolute',
    bottom: '15%',
  }
});