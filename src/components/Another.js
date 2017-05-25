import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  View
} from 'react-native';

export default class demo1 extends Component {
  static navigationOptions = {
    title: 'Another Page'
  };
     constructor () {
    super();
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {
      text: ''
    };
  }

  render() {
        const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Ashish
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <TextInput
          style={styles.input}
          placeholder={"write something"}
          onChangeText={this.handleTextChange}
          value={text}
          />




      </View>
    );
  }

   handleTextChange (text) {
    this._setText(text);
  }
  _setText (text) {
    this.setState({text});
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    width: (Dimensions.get('window').width - 20),
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center'
  },
});
