import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import StageCodeConsole from './description/StageCodeConsole'

export default class UserConsoleContainer extends Component {

  constructor(props) {
      super(props);
  }

  componentDidMount(){
    console.log('console container didmount');
  }
  
  render() {
    console.log('console container render');
    return (
      <View style={styles.consoleContainer}>
        <StageCodeConsole {...this.props} />
        <Text style={styles.userConsoleTitle}>Select the button in the order!</Text>
        <View style={styles.userConsole}>
          { this.props.loadView('userConsole') }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    consoleContainer : {
        width : '100%',
        height : '50%',
        backgroundColor : 'gray'
    },
    userConsole : {
      height : '55%',
      backgroundColor : '#f2f2f2'
    },
    userConsoleTitle : {
      marginBottom : 1
    }
})
