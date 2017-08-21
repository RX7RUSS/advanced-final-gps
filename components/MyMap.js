import React, { Component } from 'react';
import { View, Text, StyleSheet, PropTypes } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import store from '../store';
import { connect } from 'react-redux';



@connect((store) => {
  return {
    position: store.currentPosition.position
  };
})
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
        region={this.props.position}
        onRegionChange={this.onRegionChange}
        >
      <MapView.Marker
        style={styles.markerStyle}
        coordinate={this.props.position}
        title='Current Position Marker'
        description='Click "Save Location" Below!'
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    width: 250,
    height: 350,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#000',
    borderWidth: 3,
    marginTop: 15,
    textAlign: 'center',
  },
  markerStyle: {
    textAlign: 'center',
  },
});

export default MyMap;
