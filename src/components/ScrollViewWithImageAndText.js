import React, { Component } from 'react';
import {
  AppRegistry,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  View
} from 'react-native';
import Toolbar from './toolbar'

export default class ScrollViewWithImageAndText extends Component {
  static navigationOptions = {
    title: 'Scroll View'
  };
 render() {
   let pic = {
     uri: 'https://www.hallwaze.com/images/avatar/thumb/400x400/14865233308128115145953637665334IMG_20160114_161000.jpg'
   };
      return (

        <ScrollView >
            <Text style={styles.title}>COVER RESIZE MODE</Text>
            <Image source={pic} style={styles.ImageStyle}
            resizeMode='cover' />
            <Text style={styles.title}>STRETCH RESIZE MODE</Text>
            <Image source={pic} style={styles.ImageStyle}
            resizeMode='stretch' />
            <Text style={styles.title}>CONTAIN RESIZE MODE</Text>
            <Image source={pic} style={styles.ImageStyle}
            resizeMode='contain' />
            <Text style={styles.title}>CENTER RESIZE MODE</Text>
            <Image source={pic} style={styles.ImageStyle}
            resizeMode='center' />
            <Text>
              On iOS, a React Native ScrollView uses a native UIScrollView.
              On Android, it uses a native ScrollView.
              On iOS, a React Native Image uses a native UIImageView.
              On Android, it uses a native ImageView.
              React Native wraps the fundamental native components, giving you
              the performance of a native app, plus the clean design of React.
              This guide covers the various navigation components available in React Native. If you are just getting started with navigation, you will probably want to use React Navigation.
              If you are only targeting iOS and would like to stick to the native look and feel, check out NavigatorIOS. The Navigator component is older but has been thoroughly tested in production.
            </Text>
          </ScrollView>
      );
    }
  }
  //Styling
  const styles = StyleSheet.create({
     ImageStyle: {
          height: 200,
          width: 385
        },
        title: {
            fontSize: 16,
            color:"#000",
            padding:10
          }

  });
