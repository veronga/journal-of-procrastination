import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';

import styles from './styles';

export default function Button(props) {
  const { container, containerModal } = styles;
  const { isShowPicker, togglePicker } = props;
  return (
    <Modal animationType="slide" visible={isShowPicker} transparent>
      <View style={container}>
        <View style={containerModal}>
          <TouchableHighlight onPress={togglePicker}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
}
