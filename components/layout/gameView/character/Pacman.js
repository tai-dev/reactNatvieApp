import React, { Component } from 'react'
import { Animated, Easing, StyleSheet, Text, View } from 'react-native'

export default class Pacman extends Component {

  constructor(props) {
    super(props);
    
  }
  

  componentDidMount(){
    this.props.doFeed();
  }

  render() {
    const pacManTopInterpolation = this.props.animationValue.get('rotatePacManTop').interpolate({
      inputRange : [0, 1],
      outputRange : ['0deg', '-35deg']
    });

    const pacManBottomInterpolation = this.props.animationValue.get('rotatePacManTop').interpolate({
      inputRange : [0, 1],
      outputRange : ['0deg', '35deg']
    });
    
    // css 양식에 맞게
    const pacManTopRotationStyle = {
      transform : [ { rotate : pacManTopInterpolation }, { perspective : 1000 }],
    }

    const pacManBottomRotationStyle = {
      transform : [ { rotate : pacManBottomInterpolation }, { perspective : 1000 }],
    }


    return (
      <View style={ styles.pacManContainer }>
        <Animated.View style={ [ styles.pacManTop, pacManTopRotationStyle ] } />
        <Animated.View style={ [ styles.pacManBottom, pacManBottomRotationStyle ] } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  pacManContainer : {
    width : 25,
    height : 25,
  },
  pacManTop : {
    backgroundColor : 'yellow',
    width : '100%',
    height : '50%',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  pacManBottom : {
    backgroundColor : 'yellow',
    width : '100%',
    height : '50%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  }
})
