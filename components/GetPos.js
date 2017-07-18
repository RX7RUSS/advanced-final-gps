import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { View, Text, StyleSheet, Button } from 'react-native';

@connect((store) => {
  return {
    coordinates: store.latLong.coordinates
  };
})
class GetPos extends Component {
    constructor(props) {
      super(props);

      this.getCoordinatesHandler = this.getCoordinatesHandler.bind(this);

      this.state = {
        latitude: null,
        longitude: null,
        error: null,
      };
    }

    componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }

    getCoordinatesHandler() {
      this.props.dispatch({ type: "LAT_LONG", payload: {lat: this.state.latitude, long: this.state.longitude} })
      console.log(this.props.coordinates);
    }

    render() {
      return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.titleText}>Log Current Coordinates</Text>
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
          <Button style={styles.button} onPress={this.getCoordinatesHandler}
            title="Save Location"
            color="black"
            />
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
  button: {
    fontSize: 20,
    fontWeight: '800'
  },
});

export default GetPos;
