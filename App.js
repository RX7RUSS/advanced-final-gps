import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PosWatch from './PosWatch';
import GetPos from './GetPos';
import Title from './Title';

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
    borderTopWidth: 40,
    borderBottomWidth: 40,
    borderLeftWidth: 40,
    borderRightWidth: 40,
    borderRadius: 2,
    borderColor: '#eee',
    padding: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '800'
  },
});
