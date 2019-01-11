import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'


export default class GameViewContainer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    console.log('gameview container didmount');
  }

  render() {
    console.log('gameview container render' );
    return (
      <View style={styles.container}>
        <Text>{ this.props.level }</Text>
        <View style={styles.playGroundConatiner} >
          <View style={styles.playGround} >
            { this.props.loadView('codeRenderView') }
          </View>
        </View>
      </View>
    )
  }


}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '49%',
        backgroundColor : '#333c4f',
        // backgroundColor : '#232426',
    }
})
