import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  ListView,
  ToolbarAndroid,
  ScrollView,
  View
} from 'react-native';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';
export default class ReactList extends Component {
 constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }
  componentDidMount() {
    this.fetchData();
  }

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

 render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }else {
      return (
        <View>
          <ToolbarAndroid
            title='React List'
            style={styles.toolbar}
            titleColor='white'/>
            <ScrollView>
              <ListView
               style={styles.listView}
               dataSource={this.state.dataSource}
               renderRow={this.renderMovie}/>
            </ScrollView>
        </View>
      );
    }
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          Loading movies...
        </Text>
      </View>
    );
  }
  renderMovie(movie) {
    return (
      <Card style = {styles.card}>
        <View style={styles.container}>
          <Image
            source={{uri: movie.posters.thumbnail}}
            style={styles.thumbnail}/>
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
          </View>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

   listView: {
    backgroundColor: '#F7F7F9',
  },

   rightContainer: {
    flex: 1,
  },
   toolbar: {
        height: 56,
        backgroundColor: '#24292E',
    },

   thumbnail: {
    height: 50,
    borderRadius:25,
    width: 50
  },

   title: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 6,
    textAlign: 'left',
    color:"#000",
    padding:10,
  },
   card: {
    borderWidth: 3,
    borderRadius: 3,
    borderColor:'#000',
    shadowColor: "#000000",
    shadowOpacity: 0.9,
    shadowRadius: 1,
    width: 300,
    height: 300,
    padding: 10,
  },
 separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

});
