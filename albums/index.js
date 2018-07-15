// index.ios.js - code for ios

// import a library to help create a component
import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
class App extends Component {
  state = { albums: [] };
  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => res.json())
      .then(albums => this.setState({ albums }));
  }
  render() {
    console.log(this.state);
    return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
    );
  }
}

// Render it to the device
AppRegistry.registerComponent('albums', () => App);
