import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import PosWatch from './components/PosWatch';
import GetPos from './components/GetPos';
import Title from './components/Title';
import MyMap from './components/MyMap';
import store from './store';
import * as firebase from 'firebase';


var config = {
 apiKey: "AIzaSyCP4pT-Id4C2e7A_lq1CeNz7qGPtCjWYT0",
 authDomain: "gps-app-cb724.firebaseapp.com",
 databaseURL: "https://gps-app-cb724.firebaseio.com",
 storageBucket: "gps-app-cb724.appspot.com",
};
const firebaseApp = firebase.initializeApp(config);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Title />
          <PosWatch />
          <MyMap />
          <GetPos firebaseApp={firebaseApp}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 9,
    borderStyle: 'solid',
    borderColor: 'lightblue',
    borderRadius: 20,
    padding: 20,
    margin: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#fff'
  },
});
