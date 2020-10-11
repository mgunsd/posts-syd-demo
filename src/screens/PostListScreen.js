import React from 'react';
import { FlatList } from 'react-native';
import { Screen, Container, CustomHeader, FadingEnds, Row } from 'components';
import useResources from 'hooks/useResources';

export const PostListScreen = ({ navigation }) => {
  const resources = useResources('posts');
  return (
    <Screen>
      <CustomHeader
        title='Posts List' />
      <Container>
        <FadingEnds>
          <FlatList
            showsVerticalScrollIndicator={false}
            width={"100%"}
            initialNumToRender={16}
            style={{ paddingTop: 30, }}
            showsHorizontalScrollIndicator={false}
            data={resources}
            keyExtractor={post => post.id.toString()}
            renderItem={({ item }) => <Row
              id={item.id}
              data={item.title}
              onPress={() => navigation.navigate('Detail', { post: item })} />}
          />
        </FadingEnds>
      </Container>
    </Screen>
  )
};