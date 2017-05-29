import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  Alert,
  View
} from 'react-native';
import Toolbar from './toolbar'

export default class NestedNavigation extends Component {
  static navigationOptions = {
    title: 'Nested Navigation'
  };
//    onButtonPress() {
//   Alert.alert('Button has been pressed!');
// };

 render() {
   const { navigate } = this.props.navigation;

      return (
        <View>
        <Button
        onPress={() => navigate('Another')}
        title="Press Me"
        accessibilityLabel="See an informative alert"
        />
        </View>

      );
    }
  }
