import React from 'react';
import { View } from 'react-native';
import moment from 'moment';
import { Agenda, LocaleConfig } from 'react-native-calendars';
import firebase from 'react-native-firebase';

import CalendarCard from './components/CalendarCard';

LocaleConfig.locales['ru'] = {
  monthNames: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь'
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.'
  ],
  dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
};

LocaleConfig.defaultLocale = 'ru';

class ComplateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      userData: null
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
    firebase
      .database()
      .ref('tasks')
      .child(user.uid)
      .on('value', snapshot => {
        const data = {};
        snapshot.forEach(item => {
          const task = item.val();
          const date = moment(task.date, 'DD-MM-YYYY, H:mm').format('YYYY-MM-DD');
          if (!data[date]) {
            data[date] = [];
          }
          data[date].push({ ...task, date: moment(task.date, 'DD-MM-YYYY, H:mm').format('H:mm') });
        });
        this.setState({ data });
      });
  };

  renderItems = item => <CalendarCard item={item} />;

  render() {
    const { data } = this.state;
    return (
      <Agenda
        theme={{
          backgroundColor: '#ffff',
          calendarBackground: '#fafafa',
          selectedDayBackgroundColor: '#4078c0',
          agendaDayTextColor: '#ACACB3',
          agendaDayNumColor: '#ACACB3',
          agendaTodayColor: '#4078c0',
          textSectionTitleColor: '#d9e1e8',
          todayTextColor: '#E21A1A',
          dayTextColor: '#6762a6',
          selectedDayTextColor: '#fafafa',
          textDisabledColor: '#d9e1e8',
          dotColor: '#4078c0',
          selectedDotColor: '#4078c0',
          monthTextColor: '#767C96',
          indicatorColor: '#767C96',
          agendaKnobColor: '#6e5494'
        }}
        firstDay={1}
        items={data}
        renderEmptyDate={() => <View />}
        renderItem={this.renderItems}
        rowHasChanged={(r1, r2) => r1.id !== r2.id}
      />
    );
  }
}

export default ComplateScreen;
