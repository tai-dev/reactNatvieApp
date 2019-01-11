import React, { Component } from 'react'
import { Animated, PanResponder, Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native'

// const AnimatedTouchable = Animated.createAnimatedComponent(View);

export default class Button extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      _pressAnimationValue : new Animated.Value(0),
    }

    this.opacityRange = this.state._pressAnimationValue.interpolate({
      inputRange : [0, 1],
      outputRange : [0, 1]
    })

    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder : (evt, gestureState) => { 
        return true;
      },
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant : (evt) => {
        Animated.spring(this.state._pressAnimationValue, {
          toValue : 1,
          useNativeDriver : true
        }).start()
      },
      onPanResponderReject : (evt) => {
        console.log('is rejcting touch event', evt);
      },
      onPanResponderRelease : ( e, gestureState ) => {
        Animated.spring(this.state._pressAnimationValue, { toValue : 0, friction : 3, useNativeDriver : true }).start();
      }
    })
    this._onPress = this._onPress.bind(this);
  }

  render() {
    return (
      <View style={styles.button} onTouchEnd={this.props.touch} >
        <Text numberOfLines={1} >{this.props.word}</Text>
      </View>    
    )
  }

  _onPress(e){
    e.stopPropagation();
    this.state._pressAnimationValue.stopAnimation( timeLine => {
      console.log('checking timeline', timeLine);
      Animated.spring(this.state._pressAnimationValue, {
        toValue : 1,
        useNativeDriver : true
      }).start()
    })
    console.log(e);
  }
}

const styles = StyleSheet.create({
  button : {
    width : 55,
    height : 30,
    margin : '1%',
    backgroundColor : '#fff', 
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    elevation:5,
    shadowColor: 'black',
    shadowRadius: 5,
    shadowOffset: { height: 5 },
    display : 'flex', justifyContent: "center",alignItems: "center"
  }
})


{/* <Animated.View {...this._panResponder.panHandlers} */}
  // style={[styles.button, { shadowOpacity : this.state._pressAnimationValue } ]}
{/* > */}
  {/* <Text numberOfLines={1} >{this.props.word}</Text> */}
{/* </Animated.View> */}