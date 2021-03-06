import React from 'react';
import { View, Image, Text } from 'react-native';
import firebase from 'react-native-firebase';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

import Input from '../../components/Input';
import Button from '../../components/Button';
import CustomModal from '../../components/CustomModal';
import SwitchCard from '../../components/SwitchCard';
import { screenWidth } from '../../constants';

import styles from './styles';

class TaskScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPicker: false,
      date: '',
      isNotificationEnable: true,
      userData: null,
      category: 'md-notifications',
      note: '',
      error: null
    };
  }

  componentDidMount() {
    this.readUserTasks();
  }

  readUserTasks = () => {
    const user = firebase.auth().currentUser;
    this.setState({
      userData: user
    });
  };

  createTask = () => {
    const {
      note,
      date,
      userData: { uid },
      category
    } = this.state;
    if (note === '') {
      this.setState({ error: 'Пожалуйста введите задачу' });
    } else if (date === '') {
      this.setState({ error: 'Пожалуйста введите время и дату' });
    } else {
      try {
        firebase
          .database()
          .ref('tasks')
          .child(uid)
          .push({ title: note, date, icon: category });
      } catch {
        this.setState({ error: 'Задача не была создана' });
      }
      this.setState({ date: '', category: null, note: '' });
      this.buildNotification(note, date);
    }
  };

  buildNotification = (note, date) => {
    const notification = new firebase.notifications.Notification()
      .setTitle('Не забудь о:')
      .setSound('default')
      .setBody(note)
      .android.setAutoCancel(true)
      .android.setChannelId('jopChanel');

    firebase.notifications().scheduleNotification(notification, {
      fireDate: moment(date, 'DD-MM-YYYY, H:mm').valueOf()
    });
  };

  togglePicker = () => {
    const { isShowPicker } = this.state;
    this.setState({
      isShowPicker: !isShowPicker
    });
  };

  toggleNotify = value => {
    this.setState({
      isNotificationEnable: value
    });
  };

  onPressIcon = value => {
    this.setState({
      category: value,
      isShowPicker: false
    });
  };

  userText = value => {
    this.setState({
      note: value
    });
  };

  render() {
    const { isShowPicker, isNotificationEnable, error, note, date } = this.state;
    const {
      container,
      containerDataPicker,
      styleImg,
      customTitleText,
      customTitleSwitch,
      customContainer,
      textError
    } = styles;
    return (
      <View style={container}>
        <CustomModal
          isShowPicker={isShowPicker}
          togglePicker={this.togglePicker}
          onPressIcon={this.onPressIcon}
        />
        <Input
          icon="md-create"
          placeholder="Что делаем?"
          value={note}
          onChangeText={note => this.setState({ note })}
        />
        <Button
          title={date || 'Дата и время'}
          icon="md-alarm"
          customContainer={customContainer}
          customTitle={customTitleText}
        >
          <DatePicker
            style={containerDataPicker}
            date={date}
            mode="datetime"
            locale="ru-RU"
            placeholder="select date"
            format="DD-MM-YYYY, H:mm"
            confirmBtnText="Подтвердить"
            cancelBtnText="Выйти"
            onDateChange={date => {
              this.setState({ date, error: null });
            }}
            showIcon={false}
          />
        </Button>
        <Button
          title="Категория"
          icon="md-clipboard"
          customContainer={customContainer}
          customTitle={customTitleText}
          onButtonPress={this.togglePicker}
        />
        <SwitchCard
          title="Уведомление"
          customContainer={{ height: 40 }}
          customTitle={customTitleSwitch}
          value={isNotificationEnable}
          onValueChange={this.toggleNotify}
        />
        <Button
          onButtonPress={this.createTask}
          title="Сохранить задачу"
          icon="ios-checkmark-circle"
          customContainer={customContainer}
          customTitle={customTitleText}
        />
        <Text style={textError}>{error}</Text>
        <Image
          source={require('../../../img/leni.png')}
          style={[
            styleImg,
            { height: screenWidth < 350 ? 180 : 300, width: screenWidth < 350 ? 180 : 300 }
          ]}
        />
      </View>
    );
  }
}

export default TaskScreen;
