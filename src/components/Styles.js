import {
  StyleSheet,
  Dimensions
} from 'react-native';

module.exports = StyleSheet.create({

centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },

gray: {
    backgroundColor: '#cccccc',
  },

horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },

container:{
    flex: 1,
    flexDirection: 'column',
    padding:5
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
viewPager: {
    flex: 1,
  },

separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },

welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

input: {
    width: (Dimensions.get('window').width - 20),
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    alignSelf: 'center'
  },

thumbnail: {
    height: 50,
    borderRadius:25,
    width: 50
  },

pageStyle: {
    alignItems: 'center',
    padding: 20,
  }

});
