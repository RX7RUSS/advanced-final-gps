import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Title extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.titleText}>GPS LOCATION APP</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingTop: 10,
    paddingBottom: 8,
    paddingLeft: 28,
    paddingRight: 18,
    borderRadius: 7,
    marginBottom: 7,
    width: 250,
    alignItems: 'center',
  },
});
