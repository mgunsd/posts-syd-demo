import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, } from 'context';
import { IntroScreen, PostListScreen, PostDetailScreen } from 'screens';

const Stack = createStackNavigator();

export default MainStack = () => {
  const { dark } = useTheme();
  return (<>
    <StatusBar barStyle={dark ? 'light-content' : 'dark-content'} />
    <Stack.Navigator initialRouteName='Intro' headerMode='none' mode='modal' >
      <Stack.Screen
        name='Intro'
        component={IntroScreen}
      />
      <Stack.Screen
        name='Posts'
        component={PostListScreen}
      />
      <Stack.Screen
        name='Detail'
        component={PostDetailScreen}
      />
    </Stack.Navigator>
  </>
  )
};