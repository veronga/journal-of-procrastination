import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import firebase from 'react-native-firebase';

import Router from './src/navigation';

class App extends Component {
  componentDidMount() {
    const channel = new firebase.notifications.Android.Channel(
      'jopChanel',
      'jopChanel Channel',
      firebase.notifications.Android.Importance.Max
    ).setDescription('');
    firebase.notifications().android.createChannel(channel);

    SplashScreen.hide();
  }

  render() {
    return <Router />;
  }
}

export default App;
