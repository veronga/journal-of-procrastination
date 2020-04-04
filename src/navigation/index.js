import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import AuthLoading from '../screens/AuthLoading';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskScreen from '../screens/TaskScreen';
import ComplateScreen from '../screens/ComplateScreen';

const TabNavigator = createBottomTabNavigator(
  {
    TaskScreen: {
      screen: TaskScreen,
      navigationOptions: {
        title: 'Добавить задачу',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-create" size={30} color={tintColor} />
      }
    },
    ComplateScreen: {
      screen: ComplateScreen,
      navigationOptions: {
        title: 'Календарь задач',
        tabBarIcon: ({ tintColor }) => <Icon name="md-calendar" size={30} color={tintColor} />
      }
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        title: 'Настройки',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-settings" size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#6e5494',
      inactiveTintColor: '#6994CB',
      labelStyle: {
        fontSize: 10,
        lineHeight: 12,
        letterSpacing: -0.12
      },
      tabStyle: {},
      style: {
        backgroundColor: '#fff'
      }
    }
  }
);

const AppNavigator = createStackNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
      navigationOptions: {
        header: null
      }
    },
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  { initialRouteName: 'AuthLoading' }
);

export default createAppContainer(AppNavigator);
