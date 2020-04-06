import React from 'react';
import { View, Modal, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function AuthModal(props) {
  const { container, containerModal } = styles;
  const { isShowPicker, togglePicker } = props;
  return (
    <Modal animationType="slide" visible={isShowPicker} transparent>
      <View style={container}>
        <View style={containerModal}>
          <TouchableHighlight onPress={togglePicker} />
        </View>
      </View>
    </Modal>
  );
}
