import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class FinishPoint extends Component {
  render() {
    return (
      <View style={styles.finishPointWrapper}>
        <View style={styles.finishPoint}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    finishPoint : {
      width : '70%',
      height : '70%',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      borderTopLeftRadius: 100,
      borderTopRightRadius: 100,
      backgroundColor : 'red',
      alignSelf : 'center'
    },
    finishPointWrapper : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center',
      width: 25,
      height : 25,
      backgroundColor : 'white'
    }
})
