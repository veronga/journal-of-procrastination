import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const EventCard = ({ item }) => {
  const { date, icon, title } = item;
  const { timeStyle, titleStyle, iconStyle } = styles;
  return (
    <View style={[styles.item]}>
      <View>
        <Text style={titleStyle}>{title}</Text>
        <Text style={timeStyle}>{date}</Text>
      </View>
      <Icon name={icon} style={iconStyle} />
    </View>
  );
};

export default EventCard;
