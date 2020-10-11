import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Label, Spacer } from './a-commons';

export const Comment = ({ name, body, style }) => {
  return (
    <View style={{ ...styles.comStyle, ...style }}>
      <Spacer line />
      <Label style={styles.comname}>
        {name}
      </Label >
      <Label style={styles.combody}>
        {body}
      </Label>
    </View>
  )
}

export default Comment;

const styles = StyleSheet.create({
  comStyle: {
    marginVertical: 1,
  },
  comname: {
    fontFamily: 'NewYorkMedium-Semibold',
    fontSize: 15,
    lineHeight: 17,
    marginVertical: 2,
  },
  combody: {
    marginVertical: 4,
    fontFamily: 'NewYorkMedium-Regular',
    fontSize: 12,
    lineHeight: 15,
  },

  author: {

  },
  body: {
    marginBottom: 10,
  },
  commentsT: {
    marginVertical: 10,
    fontFamily: 'SFProDisplay-Bold',
    fontSize: 21,
    lineHeight: 24,
  },
})