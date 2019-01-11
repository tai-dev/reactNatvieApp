import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from '../buttons/Button'

export default class Tutorial extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('userConsole Tutorial render', this.props);
    return (
      <View style={styles.buttonWrapper} >
        {
          this.props.codingWords.map( (word, index) => {
            return <Button key={index} word={word} touch={this.props.propsFuncs.select} />
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonWrapper : { display : 'flex', flexDirection : 'row' }
})
