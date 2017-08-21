
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, PropTypes } from 'react-native';
import store from '../store';

@connect((store) => {
  return {
    coordinates: store.currentPosition.position
  };
})
class PosWatch extends Component {
    constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        let thisPosition = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        }
        this.setState(thisPosition);
        this.props.dispatch({ type: "CURRENT_POS", payload: thisPosition });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 250, distanceFilter: 10 },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
      <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.titleText}>Live Position Update</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '800'
  },
});

export default PosWatch;
