import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function Button(props) {
  const {
    title,
    onButtonPress,
    icon,
    customContainer,
    customTitle,
    customIconStyle,
    children
  } = props;
  const { container, titleStyle, iconStyle } = styles;
  return (
    <TouchableOpacity style={[container, customContainer]} onPress={onButtonPress}>
      {icon && <Icon name={icon} color="#6e5494" style={[iconStyle, customIconStyle]} />}
      <Text style={[titleStyle, customTitle]}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
}
