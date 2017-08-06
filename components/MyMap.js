import React, { Component } from 'react';
import { View, Text, StyleSheet, PropTypes } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';


const styles = StyleSheet.create({
  map: {
    width: 250,
    height: 250,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 3,
  },
});


class MyMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }
    };
  }


  render() {
    console.log('mymap region');
    console.log(this.state.region);
    return (
      <MapView style={styles.map}
        region={this.state.region}
        onRegionChange={this.onRegionChange}
      >
      <MapView.Marker
        coordinate={this.state.region}
        title='test marker'
        description='test description'
        />
      </MapView>
    );
  }
}

export default MyMap;
