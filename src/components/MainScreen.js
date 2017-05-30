import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListView from './ListView';
import ScrollViewWithImageAndText from './ScrollViewWithImageAndText';
import NestedNavigation from './NestedNavigation';
import Another from './Another';
import LoadWebView from './LoadWebView';
import ShowViewPagerAndroid from './ShowViewPagerAndroid';
import RadioButton from './RadioButton';
import NavigationDrawerAndroid from './NavigationDrawerAndroid';
import ActivityIndicatorComponent from './ActivityIndicatorComponent';
import styles from './Styles';

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.title}>List View </Text>
          <Button
            onPress={() => navigate('ListView')}
            title="List View With API"/>
          <Text style={styles.title}>Nested Navigation </Text>
          <Button
            onPress={() => navigate('NestedNavigation')}
            title="Nested Navigation"/>
          <Text style={styles.title}>Scroll View </Text>
          <Button
            onPress={() => navigate('ScrollViewWithImageAndText')}
            title="Scroll View"/>
          <Text style={styles.title}>Load Web View </Text>
          <Button
            onPress={() => navigate('LoadWebView')}
            title="Web View"/>
          <Text style={styles.title}>Show ViewPager Android </Text>
          <Button
            onPress={() => navigate('ShowViewPagerAndroid')}
            title="View Pager"/>
          <Text style={styles.title}>Radio Button</Text>
          <Button
            onPress={() => navigate('RadioButton')}
            title="Radio Button"/> 
          <Text style={styles.title}>Navigation Drawer Android</Text>
          <Button
            onPress={() => navigate('NavigationDrawerAndroid')}
            title="Navigation Drawer Android"/>  
          <Text style={styles.title}>Activity Indicator </Text>
          <Button
            onPress={() => navigate('ActivityIndicatorComponent')}
            title="Activity Indicator"/>  
        </ScrollView>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: MainScreen },
  ListView:{screen: ListView},
  NestedNavigation:{screen: NestedNavigation},
  ScrollViewWithImageAndText:{screen: ScrollViewWithImageAndText},
  Another:{screen: Another},
  LoadWebView:{screen: LoadWebView},
  ShowViewPagerAndroid:{screen: ShowViewPagerAndroid},
  RadioButton:{screen: RadioButton},
  NavigationDrawerAndroid:{screen: NavigationDrawerAndroid},
  ActivityIndicatorComponent:{screen: ActivityIndicatorComponent},

});
AppRegistry.registerComponent('ReactList', () => SimpleApp);
