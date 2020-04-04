import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

export default function Input(props) {
  const { icon, placeholder, secureTextEntry, customIconStyle, value, onChangeText } = props;
  const { container, iconStyle } = styles;

  return (
    <View style={container}>
      <Icon name={icon} style={[iconStyle, customIconStyle]} color="#6e5494" />

      <TextInput
        style={{
          flex: 1,
          fontSize: 16,
          color: '#000',
          paddingLeft: 25
        }}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
