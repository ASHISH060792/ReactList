import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  ToolbarAndroid,
  ScrollView,
  ActivityIndicator,
  View
} from 'react-native';
import Toolbar from './toolbar'
import styles from './Styles';

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

//Create Component
export default class ReactList extends Component {
  static navigationOptions = {
    title: 'List View',
  };
//Add constructor
 constructor() {
    super();
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      animating:true,
    };
  }

//Hit Service to get Data
  componentDidMount() {
    this.fetchData();
  }

//Method to get Data
   fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.movies),
          loaded: true,
        });
      })
      .done();
  }

//Main render Method
 render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }else {
      return (
        <View>
              <ListView
               dataSource={this.state.dataSource}
               renderRow={this.renderMovie}
               renderSeparator={this._renderSeparator}/>
        </View>
      );
    }
  }

//Render separator
  _renderSeparator(sectionID: number, rowID: number, adjacentRowHighlighted: bool) {
        return (
          <View
            style={{
              height: 1,
              backgroundColor: '#24292E' ,
            }}
          />
        );
      }

//Render Loading Movies View
  renderLoadingView() {
    return (
      <View style={styles.centering}>
        <Text>
          Loading movies...
        </Text>
        <ActivityIndicator
        animating={this.state.animating}
        style={[styles.centering, {height: 80}]}
        size="large"
      />
      </View>
    );
  }

//Show List View With Data when loaded set to true
  renderMovie(movie) {
    return (
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        </View>
    );
  }
}

