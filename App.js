import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import PosWatch from './components/PosWatch';
import GetPos from './components/GetPos';
import Title from './components/Title';
import MyMap from './components/MyMap';
import store from './store';






export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={styles.container}>
          <Title />
          <PosWatch />
          <MyMap />
          <GetPos />
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
