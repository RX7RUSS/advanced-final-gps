import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';


//ES7 decorator used to wrap 'GetPos' class in the connect method//
// eslint-disable-next-line //
@connect((store) => {
  return {
    coordinates: store.latLong.coordinates
  };
})
class GetPos extends Component {
    constructor(props) {
      super(props);
      this.posref = this.props.firebaseApp.database().ref();
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
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 100 },
      );
      this.listenForPos(this.posref);
    }

    listenForPos(posref) {
      posref.on('value', (snap) => {

        // get children as an array
        var positions = [];
        snap.forEach((child) => {
          positions.push({
            latitude: child.val().latitude,
            longitude: child.val().longitude,
            _key: child.key
          });
        });

        this.setState({
          // dataSource: this.state.dataSource.cloneWithRows(positions)
        });

      });
    }

    getCoordinatesHandler() {
      this.props.dispatch({ type: "LAT_LONG", payload: {lat: this.state.latitude, long: this.state.longitude} })
      this.posref.push({lat: this.state.latitude, long: this.state.longitude});
    }

    render() {
      return (
        <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.buttonStyle} onPress={this.getCoordinatesHandler}>
            <Text style={styles.titleText}>Save Location</Text>
          </TouchableOpacity>
          {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
        </View>
      );
    }
  }


const styles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#E5E5E5',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'lightblue',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 7,
    height: 40,
    width: 250,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center'
    }
});

export default GetPos;
