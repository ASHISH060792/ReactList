import React, { Component } from 'react';
import { ViewPagerAndroid,View,Text } from 'react-native';
import ListView from './ListView';
import ScrollViewWithImageAndText from './ScrollViewWithImageAndText';
import styles from './Styles';


export default class ShowViewPager extends Component {
   static navigationOptions = {
    title: 'View Pager',
  };
  render() {
    return (
     <ViewPagerAndroid
      style={styles.viewPager}
      initialPage={0}>
      <View style={styles.viewPager}>
         <ListView/>
      </View>
      <View style={styles.pageStyle}>
       <ScrollViewWithImageAndText/>
      </View>
    </ViewPagerAndroid>
    );
  }
}
