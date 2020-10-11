import React, { useContext } from 'react';
import { ThemeContext } from 'context';
import { Screen, CustomHeader, Heading, Container, PrimaryButton, Title1, Label, Spacer } from 'components';

export const ThemesScreen = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <Screen>
      <CustomHeader
        title='Themes Screen' />
      <Container>
        <Spacer>
          <PrimaryButton text='􀆺 Dark Theme' onPress={() => setTheme('dark')} />
        </Spacer>
        <Spacer>
          <PrimaryButton text='􀆮 Light Theme' onPress={() => setTheme('light')} />
        </Spacer>
        <Title1 style={{ fontFamily: 'SFProDisplay-Bold', margin: 15 }}>Typogaphy</Title1>
        <Heading style={{ fontFamily: 'SFProDisplay-Regular', }}>SFProDisplay Regular</Heading>
        <Heading style={{ fontFamily: 'SFProDisplay-Bold', }}>SFProDisplay Bold</Heading>
        <Heading style={{ fontFamily: 'NewYorkMedium-Regular', }}>New York Medium</Heading>
        <Heading style={{ fontFamily: 'NewYorkMedium-Semibold', }}>New York Semibold</Heading>
        <Spacer />
        <Label>Device theme recognized 􀊀</Label>
      </Container>
    </Screen>
  )
};
