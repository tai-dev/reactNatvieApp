import React from 'react';
import { AsyncStorage, StyleSheet, Text, View } from 'react-native';
import Header from './components/layout/header/header';
import UserConsoleContainer from './components/layout/console/UserConsoleContainer';
import GameViewContainer from './components/layout/gameView/GameViewContainer';
import Error from './components/layout/error/Error';
import Codes from './codingwords/codingwords.json';
import routes from './router';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      codeLines : new Map(),
      level : 'stage0',
    }
    this.loadView = this.loadView.bind(this);
    this.select = this.select.bind(this);
    this.undo = this.undo.bind(this)
  }

  componentDidMount() {
    console.log('app didmount');
  }

  render() {
    console.log('app render');
    return (
      <View style={styles.appContainer}>
        <Header />
        <GameViewContainer level={this.state.level} loadView={this.loadView} />
        <UserConsoleContainer 
          codeLines={this.state.codeLines}
          level={this.state.level} 
          loadView={this.loadView} />
      </View>
    );
  }

  // 게임 뷰 전 인트로 뷰 렌더링 완료 시 사용하기
  async _getData(id){
    try {
      const data = await AsyncStorage.getItem(id);  
      return data;
    } catch (error) {
      throw Error(`_getData Error : ${error}`)
    }
  }

    // string
  // set button type
  select(e){
    console.log('select func excuted', e);
    // this.state.codeLines.set(e.target.id, e.target.)
  }

  undo(id){
    this.state.codeLines.delete(id);
  }

  async _setData(id, value){
    try {
      await AsyncStorage.setItem(id, value);  
    } catch (error) {
      throw Error(`_setData Error : ${error}`)
    }
  }

  loadView(name){ 
    try {
      const Component = routes[name][this.state.level].default;
      return name.includes('userConsole')? <Component propsFuncs={{ select : this.select, undo : this.undo }}
       codeLines={this.state.codeLines} codingWords={ Codes[this.state.level] } /> : <Component />
    } catch (error) {
      <Error message={error} />   
    }
  }

}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection : 'column'
  },
});
