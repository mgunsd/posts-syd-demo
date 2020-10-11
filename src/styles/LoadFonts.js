import React from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

export default LoadFonts = props => {
  let [fontsLoaded] = useFonts({
    'NewYorkMedium-Regular': require('../assets/fonts/NewYorkMedium-Regular.otf'),
    'NewYorkMedium-Semibold': require('../assets/fonts/NewYorkMedium-Semibold.otf'),
    'SFProDisplay-Regular': require('../assets/fonts/SFProDisplay-Regular.otf'),
    'SFProDisplay-Bold': require('../assets/fonts/SFProDisplay-Bold.otf'),
  });
  return (!fontsLoaded) ? <AppLoading /> : props.children;
};
