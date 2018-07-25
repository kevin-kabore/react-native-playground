import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWIllMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDWbi76u_9HM6FOWz-bchBqH9KHPFHcqVA',
      authDomain: 'authentication-509db.firebaseapp.com',
      databaseURL: 'https://authentication-509db.firebaseio.com',
      projectId: 'authentication-509db',
      storageBucket: 'authentication-509db.appspot.com',
      messagingSenderId: '973307232062'
    });
  }
  render() {
    return (
      <View>
        <Header headerText={'Authentication'} />
        <Text>App Component</Text>
      </View>
    );
  }
}

export default App;
