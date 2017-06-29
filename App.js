import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PosWatch from './components/PosWatch';
import GetPos from './components/GetPos';
import Title from './components/Title';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Title />
        <PosWatch />
        <GetPos />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderStyle: 'dotted',
    borderColor: '#bbb',
    borderRadius: 20,
    padding: 20,
    margin: 30,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800'
  },
});
