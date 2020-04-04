import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import firebase from 'react-native-firebase';

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
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#A388CA" />
      </View>
    );
  }
}
