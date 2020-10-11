import React from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Cell } from './Cell';

export const Row = ({ id, data, onPress, rowStyle }) => {
  return (
    <TouchableOpacity
      onPress={onPress} >
      <View
        style={{ ...styles.rowStyle, ...rowStyle }}>

        <Cell value={id}
          style={{
            alignItems: 'center',
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
        />

        <Cell value={data}
          style={{ flex: 8, }}
        />

        <Cell value={`􀆊`}
          style={{
            alignItems: 'center',
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          }}
          textStyle={{
            fontFamily: 'SFProDisplay-Regular',
          }} />
      </View>
    </TouchableOpacity>
  )
}

export default Row;

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    height: 40,
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginVertical: 2,
  },
})