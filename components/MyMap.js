import React, { Component } from 'react';
import { View, Text, StyleSheet, PropTypes } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const styles = StyleSheet.create({
map: {
  width: 250,
  height: 250,
  alignItems: 'center',
  justifyContent: 'center',
},
});


class MyMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}



render() {
  return (
    <MapView style={styles.map}
      region={this.state.region}
      onRegionChange={this.onRegionChange}
    />
  );
}
}

export default MyMap;
