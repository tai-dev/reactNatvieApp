import React, { Component } from 'react'
import { Animated , Easing, FlatList, Text, StyleSheet, View } from 'react-native'
import PacMan from '../character/Pacman'
import FinishPoint from '../character/FinishPoint'
import RedCircle from '../object/Redcircle';

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isBarrier : false,
            animationValue : new Map([[ 'rotatePacManTop', new Animated.Value(0) ], [ 'rotatePacManBottom', new Animated.Value(0) ] ])
        }        
        
        this.doFeed = this.doFeed.bind(this);
        this._generateBlock = this._generateBlock.bind(this);
    }

  componentDidUpdate(nextProps, nextState){
    //todo
    // data get api
    console.log('update');
    return nextProps !== this.props || nextState !== this.state ? true : false;
  }

  componentWillUnmount(){
      this.state.animationValue.get('rotatePacManTop').stopAnimation();
      this.state.animationValue.get('rotatePacManBottom').stopAnimation();
  }

  render() {
    console.log('gameView Tutorial render');
    return (
      <View style={{ alignItems : 'center', justifyContent: 'center', flexDirection : 'row'}}>
        <FlatList contentContainerStyle={styles.blockMap}
            data={[
              { hasBarrier : false, key : 0, pacMan : true },
              { hasBarrier : false, key : 1 },                  
              { hasBarrier : false, key : 2 },                  
              { hasBarrier : false, key : 3 },                  
              { hasBarrier : false, key : 4 },
              { hasBarrier : false, key : 5, finishPoint : true },                  
              { hasBarrier : false, key : 6, circle : true }                  
            ]}
            keyExtractor={(item, index) => item.key = index.toString() }
            renderItem={this._generateBlock}
        >
        </FlatList>
      </View>
    )
  }

  doFeed(){
    const pacManTop = this.state.animationValue.get('rotatePacManTop');
    const pacManBottom = this.state.animationValue.get('rotatePacManBottom');
      Animated.parallel([
        Animated.sequence([
            Animated.timing(pacManTop, {
                toValue : 1,
                duration : 500,
                easing : Easing.linear,
                useNativeDriver : true
              }),
            Animated.timing(pacManTop, {
                toValue : 0,
                duration : 500,
                easing : Easing.linear,
                useNativeDriver : true
            })
        ]),
        Animated.sequence([
            Animated.timing(pacManBottom, {
                toValue : 1,
                duration : 500,
                easing : Easing.linear,
                useNativeDriver : true
              }),
            Animated.timing(pacManBottom, {
                toValue : 0,
                duration : 500,
                easing : Easing.linear,
                useNativeDriver : true
            })
          ])
      ]).start((animation) => {
          if(animation.finished) return this.doFeed();
      })
  }

  _generateBlock(obj){
      const { item } = obj;
      if(item.pacMan) return <PacMan doFeed={this.doFeed} animationValue={this.state.animationValue} />
      if(item.finishPoint) return <FinishPoint />
    //   if(item.circle) return <RedCircle />
      return item.hasBarrier? <View style={styles.barrier} /> : <View style={styles.block} />
  }
}

const styles = StyleSheet.create({
    playGroundConatiner : {
        // flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '50%',
        backgroundColor : '#232426',
    },
    playGround : {
        backgroundColor : '#0c2449',
        flexDirection: 'row',
        justifyContent : 'center',
        alignItems : 'center',
        width : '100%',
        height : '90%'
    },
    blockMap : {
        width : '70%', 
        flexDirection : 'row', 
        // backgroundColor : 'purple',
        marginTop : 0,
        marginBottom : 0,
        marginLeft : 'auto',
        marginRight : 'auto'
    },
    block : {
        width : 25,
        height : 25,
        borderWidth: 0.5,
        borderColor : 'white',
        backgroundColor :'powderblue',
    },
    barrier : {
        width : 25,
        height: 25,
        borderWidth: 0.5,
        borderColor : 'white',
        backgroundColor : 'steelblue',
        zIndex : 1000
    }
})
