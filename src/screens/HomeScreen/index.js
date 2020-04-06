import React from 'react';
import firebase from 'react-native-firebase';
import { Image, View, Text, TouchableOpacity, LayoutAnimation } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { screenWidth } from '../../constants';

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
    const { emailInput, passwordInput, isRegScreen, error } = this.state;
    const {
      container,
      styleImg,
      containerInput,
      textError,
      containerCustom,
      containerEntrance,
      customTitle,
      textCheckAccount,
      textCheckRegistrations
    } = styles;
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
          customContainer={containerEntrance}
          customTitle={customTitle}
        />
        {isRegScreen && (
          <Button
            onButtonPress={this.onSkipButtonPress}
            title="Ну или потом ;)"
            customContainer={containerCustom}
            customTitle={customTitle}
          />
        )}
        <Text style={textError}>{error}</Text>
        <View style={containerInput}>
          <TouchableOpacity onPress={this.toggleScreen}>
            <Text style={textCheckAccount}>
              {isRegScreen ? 'У вас уже есть аккаунт?' : 'Нет аккаунта?'}
              <Text style={textCheckRegistrations}>
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
