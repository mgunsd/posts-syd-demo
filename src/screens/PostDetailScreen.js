import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Screen, CustomHeader, Container, FadingEnds, Heading, Label, Spacer, Comment } from 'components';
import useResources from 'hooks/useResources';

export const PostDetailScreen = ({ route }) => {
  const { post } = route.params;
  const user = useResources(`users/${post.userId}`);
  const comments = useResources(`comments?postId=${post.id}`);

  const PostBody = ({ post, user }) => {
    return (
      <>
        <Heading style={styles.heading}>{post.title}</Heading>
        <Label style={styles.author}>by {user.name}</Label>
        <Label style={styles.body}>{post.body}</Label>
        <Heading style={styles.commentsT}>Comments  􀌮 </Heading>
      </>)
  };


  return (
    <Screen>
      <CustomHeader
        title='Post Details' />
      <Container >
        <FadingEnds >
          <FlatList
            ListHeaderComponent={() => <PostBody post={post} user={user} />}
            contentContainerStyle={styles.container}
            style={{ paddingBottom: 40, }}
            //scrollEnabled={false}
            width={"100%"}
            data={comments}
            keyExtractor={comm => comm.id.toString()}
            renderItem={({ item }) => <Comment
              name={item.name}
              body={item.body}
            />
            }
          />
        </FadingEnds>
      </Container>
    </Screen >
  )
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'NewYorkMedium-Semibold',
    textTransform: 'capitalize',
  },
  author: {
    textTransform: 'capitalize',
    fontFamily: 'NewYorkMedium-Regular',
    marginVertical: 30,
  },
  body: {
    marginBottom: 10,
  },
  commentsT: {
    marginTop: 20,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 21,
    lineHeight: 24,
  },
  comments: {
    marginVertical: 10,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 21,
    lineHeight: 24,
  },
  container: {
    alignItems: 'flex-start',
    padding: 30,
  },
});