import React, { PropTypes, Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import MapView from 'react-native-maps';

export default class Mymap extends React.Component {
  render() {
    return(
      <View>
        <MapView
          styles={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  map: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
  },
});
