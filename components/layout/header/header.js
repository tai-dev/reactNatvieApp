import React, { PureComponent } from 'react'
import { StyleSheet ,Text, View } from 'react-native'

export default class Header extends PureComponent {
  render() {
    return (
      <View style={styles.headerContainer}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    headerContainer : {
        width : '100%',
        height : '5%',
        // backgroundColor : '#ddf'
        backgroundColor : '#13203a'
    }
})