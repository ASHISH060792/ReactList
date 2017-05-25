import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  StyleSheet
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListView from './ListView';
import ScrollView from './ScrollView';
import ButtonClick from './ButtonClick';
import Another from './Another';
import RadioButton from './RadioButton';



class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
      <Text style={styles.title}>List View </Text>
        <Button
         onPress={() => navigate('ListView')}
         title="ListView"/>
         <Text style={styles.title}>Button Click </Text>

        <Button
          onPress={() => navigate('ButtonClick')}
          title="ButtonClick"/>

        <Text style={styles.title}>Scroll View </Text>

        <Button
           onPress={() => navigate('ScrollView')}
           title="ScrollView"/>

        <Text style={styles.title}>Radio Button </Text>

        <Button
              onPress={() => navigate('RadioButton')}
              title="RadioButton"/>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: MainScreen },
  ListView:{screen: ListView},
  ButtonClick:{screen: ButtonClick},
  ScrollView:{screen: ScrollView},
  Another:{screen: Another},
  RadioButton:{screen: RadioButton},

});

//Styling
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'column',
  },
   title: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 6,
    alignItems: 'center',
    textAlign: 'left',
    color:"#000",
    padding:10,
  },


});


AppRegistry.registerComponent('ReactList', () => SimpleApp);
