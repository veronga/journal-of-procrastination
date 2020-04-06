import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import firebase from 'react-native-firebase';

import styles from './styles';

export default class AuthLoading extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const user = firebase.auth().currentUser;
    setTimeout(() => {
      const { navigation } = this.props;
      navigation.navigate(user ? 'TabNavigator' : 'HomeScreen');
    }, 300);
  };

  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <ActivityIndicator size="large" color="#A388CA" />
      </View>
    );
  }
}
