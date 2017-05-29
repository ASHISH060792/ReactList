import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class LoadWebView extends Component {
   static navigationOptions = {
    title: 'Web View',
  };
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        startInLoadingState={true}
        scalesPageToFit={true}/>
    );
  }
}
