import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  View
} from 'react-native';
export default class ButtonClick extends Component {

   onButtonPress() {
  Alert.alert('Button has been pressed!');
};

 render() {
      return (
        <Button
         onPress={() => this.onButtonPress()}
          title="Press Me"
          accessibilityLabel="See an informative alert"
        />
      );
    }
  }
