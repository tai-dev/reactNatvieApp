import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Error extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.message}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
