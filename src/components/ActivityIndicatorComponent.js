import React, { Component } from 'react';
import { ActivityIndicator,ToastAndroid } from 'react-native';
import styles from './Styles';


export default class ActivityIndicatorComponent extends Component {
   static navigationOptions = {
    title: 'Activity Indicator',
  };
   constructor(props) {
    super(props);
    this.state = {
      animating: true,
    };
  }
  render() {
    return (
     <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"/>
    );
  }
}
