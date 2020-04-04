import React, { Component } from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';

import styles from './styles';

export default class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { container, containerModal } = styles;
    const { isShowPicker, togglePicker } = this.props;
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
}
