import React from 'react';
import firebase from 'react-native-firebase';
import { Image, View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';

import { screenWidth } from '../../constants';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailInput: '',
      passwordInput: '',
      isRegScreen: true,
      error: ''
    };
  }

  onLogin = () => {
    const { emailInput, passwordInput } = this.state;
    if (emailInput === '') {
      this.setState({ error: 'Пожалуйста введите логин' });
    } else if (passwordInput === '') {
      this.setState({ error: 'Пожалуйста введите пароль' });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(emailInput, passwordInput)
        .then(() => {})
        .catch(error => error);
    }
  };

  onRegister = () => {
    const { emailInput, passwordInput } = this.state;
    const { navigation } = this.props;
    if (emailInput === '') {
      this.setState({ error: 'Пожалуйста введите логин' });
    } else if (passwordInput === '') {
      this.setState({ error: 'Пожалуйста введите пароль' });
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput, passwordInput)
        .then(() => {
          navigation.navigate('TabNavigator');
        })
        .catch(error => error);
    }
  };

  onRegButtonPress = () => {
    const { isRegScreen } = this.state;
    if (isRegScreen) {
      this.onRegister();
    } else {
      this.onLogin();
    }
  };

  onSkipButtonPress = () => {
    const { navigation } = this.props;
    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        navigation.navigate('TabNavigator');
      })
      .catch(error => error);
  };

  onChangeEmail = value => {
    this.setState({
      emailInput: value
    });
  };

  onChangePassword = value => {
    this.setState({
      passwordInput: value
    });
  };

  toggleScreen = () => {
    const { isRegScreen } = this.state;
    this.setState(
      {
        isRegScreen: !isRegScreen
      },
      LayoutAnimation.spring
    );
  };

  render() {
    const { container, styleImg, containerInput } = styles;
    const { emailInput, passwordInput, isRegScreen, error } = this.state;
    return (
      <View style={container}>
        <Image
          source={require('../../../img/registration.png')}
          style={[styleImg, { height: screenWidth < 350 ? 210 : 230 }]}
        />
        <Input
          value={emailInput}
          onChangeText={this.onChangeEmail}
          icon="md-contact"
          placeholder="Почта"
        />
        <Input
          value={passwordInput}
          onChangeText={this.onChangePassword}
          icon="md-lock"
          placeholder="Пароль"
          secureTextEntry
        />
        <Button
          onButtonPress={this.onRegButtonPress}
          title={isRegScreen ? ' Зарегистироваться' : 'Войти'}
          customContainer={{ backgroundColor: '#4078c0', height: 50 }}
          customTitle={{ color: '#FFF8F2' }}
        />
        {isRegScreen && (
          <Button
            onButtonPress={this.onSkipButtonPress}
            title="Ну или потом ;)"
            customContainer={{ backgroundColor: '#6e5494', height: 50 }}
            customTitle={{ color: '#FFF8F2' }}
          />
        )}
        <Text style={{ color: '#bd2c00', textAlign: 'center', paddingTop: 5 }}>{error}</Text>
        <View style={containerInput}>
          <TouchableOpacity onPress={this.toggleScreen}>
            <Text style={{ color: '#6e5494' }}>
              {isRegScreen ? 'У вас уже есть аккаунт?' : 'Нет аккаунта?'}
              <Text style={{ color: '#4078c0', fontSize: 17 }}>
                {isRegScreen ? ' Войти' : ' Зарегистироваться'}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
