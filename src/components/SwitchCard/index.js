import React from 'react';
import { View, Text, Switch } from 'react-native';
import styles from './styles';

export default function SwitchCard(props) {
  const {
    title,
    subtitle,
    customContainer,
    customTitle,
    onValueChange,
    value
  } = props;
  const { container, styleText, subStyleText } = styles;

  return (
    <View style={[container, customContainer]}>
      <Switch
        thumbColor="#6e5494"
        trackColor="#6e5494"
        style={{ alignSelf: 'center' }}
        onValueChange={onValueChange}
        value={value}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={[styleText, customTitle]}>{title}</Text>
        <Text style={subStyleText}>{subtitle}</Text>
      </View>
    </View>
  );
}
