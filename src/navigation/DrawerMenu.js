import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useTheme } from 'context';
import { ThemesScreen, IntroScreen, CreditsScreen, PostListScreen } from 'screens';
import MainStack from './MainStack';

const Drawer = createDrawerNavigator();
export default DrawerMenu = () => {
  const { colors, dark } = useTheme();
  return (
    <Drawer.Navigator
      drawerType="back"
      drawerPosition="right"
      drawerContentOptions={{
        activeTintColor: colors.light1,
        activeBackgroundColor: colors.card,
        itemStyle: { marginVertical: 10, width: '90%' },
        labelStyle: {
          color: colors.text,
          fontFamily: 'SFProDisplay-Bold',
          letterSpacing: 0.60,
        }
      }}
      drawerStyle={{
        backgroundColor: colors.base,
        width: 240,
      }}
    >
      <Drawer.Screen name='Intro' component={IntroScreen} />
      <Drawer.Screen name='Posts' component={MainStack} />
      <Drawer.Screen name='Themes' component={ThemesScreen} />
      <Drawer.Screen name='Credits' component={CreditsScreen} />
    </Drawer.Navigator >
  )
};
