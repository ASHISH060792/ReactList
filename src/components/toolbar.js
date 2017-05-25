import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ToolbarAndroid
} from 'react-native';
export default class Toolbar extends Component {
 render() {
      return (
        <ToolbarAndroid
          title='React Samples'
          style={styles.toolbar}
          titleColor='white'/>
      );
    }
  }
  //Styling
  const styles = StyleSheet.create({
     toolbar: {
          height: 56,
          backgroundColor: '#56857B',
      }

  });
