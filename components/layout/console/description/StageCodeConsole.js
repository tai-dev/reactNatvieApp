import React from 'react'
import { Text, TextInput, StyleSheet, View } from 'react-native'

export default class StageCodeConsole extends React.PureComponent {
  render() {
    return (
      <View style={styles.codeConsole}>
        <Text style={styles.consoleTitle}> Your Code </Text>
        <View>
          { this.renderCodeLines() }
        </View>
      </View>
    )
  }

  renderCodeLines(){
    const codeLines = [...this.props.codeLines];
    return codeLines.length?
      codeLines.map((entry) => {
        let key = entry[0];
        let value = entry[1];
        return <View key={key}>{value}</View>
      })
      : null
  }
}

const styles = StyleSheet.create({
    codeConsole : {
        width : '100%',
        height : '45%',
        backgroundColor : 'white'
    },
    consoleTitle : {
      marginBottom : 1
    }
})