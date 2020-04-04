import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function CategoryIcon(props) {
  const { icon, iconColor, title, onPressIcon } = props;
  const { iconStyle, styleText, container } = styles;
  return (
    <TouchableOpacity style={container} onPress={() => onPressIcon(icon)}>
      <Icon name={icon} color={iconColor} style={iconStyle} />
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
}
