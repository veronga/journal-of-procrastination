import React from 'react';
import { View, ScrollView, Image, Linking } from 'react-native';
import Rate from 'react-native-rate';
import firebase from 'react-native-firebase';

import Button from '../../components/Button';
import AuthModal from '../../components/AuthModal';
import { screenWidth } from '../../constants';

import styles from './styles';

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowPicker: false,
      rated: false
    };
  }

  togglePicker = () => {
    const { isShowPicker } = this.state;
    this.setState({
      isShowPicker: !isShowPicker
    });
  };

  onLogout = () => {
    const { navigation } = this.props;
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.navigate('HomeScreen');
      })
      .catch(error => error);
  };

  sendEmail = () => {
    Linking.openURL('mailto:verongacompany@gmail.com?subject=&body=');
  };

  assesApp = () => {
    const options = {
      GooglePackageName: 'com.atlonis.journalofprocrastination',
      preferInApp: false
    };
    Rate.rate(options, success => {
      if (success) {
        this.setState({ rated: true });
      }
    });
  };

  render() {
    const { isShowPicker } = this.state;
    const { styleImg, container, customContainer, customTitle, customTitleExit } = styles;
    return (
      <View style={container}>
        <AuthModal isShowPicker={isShowPicker} togglePicker={this.togglePicker} />
        <ScrollView>
          <Button
            onButtonPress={this.assesApp}
            icon="md-star"
            iconColor="#D3C755"
            title="Оценить приложение"
            customContainer={customContainer}
            customTitle={customTitle}
          />
          <Button
            icon="ios-chatbubbles"
            iconColor="#4E8356"
            title="Обратная связь"
            customContainer={customContainer}
            customTitle={customTitle}
            onButtonPress={this.sendEmail}
          />
          <Button
            icon="md-close-circle"
            iconColor="#D24B53"
            title="Выйти"
            customContainer={customContainer}
            customTitle={customTitleExit}
            onButtonPress={this.onLogout}
          />
          <Image
            source={require('../../../img/sonileni.png')}
            style={[styleImg, { height: screenWidth < 350 ? 230 : 215 }]}
          />
        </ScrollView>
      </View>
    );
  }
}

export default ProfileScreen;
