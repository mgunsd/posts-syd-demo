import React from 'react';
import { Screen, CustomHeader, Container, Link, Title1, Heading, Spacer } from 'components';
import { Title } from 'react-native-paper';

export const CreditsScreen = () => {
  return (
    <Screen>
      <CustomHeader
        title='Credits' />

      <Container >
        <Link mailto={"mailto:mgunsd@gmail.com"}><Heading>mgunsd@gmail.com</Heading></Link>
        <Spacer />
        <Link style={{ margin: 20 }} url={'https://www.linkedin.com/in/mark-gun/'}><Title1>Linked In</Title1></Link>
        <Link style={{ margin: 20 }} url={'https://github.com/mgunsd'}><Title1>Github</Title1></Link>
        <Link style={{ margin: 20 }} url={'https://mgunsd.github.io/Portfolio/'}><Title1>Portfolio</Title1></Link>
      </Container >
    </Screen >
  )
};