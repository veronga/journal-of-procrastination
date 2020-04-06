import React, { Component } from 'react';
import { View, Modal, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CategoryIcon from '../CategoryIcon';

import styles from './styles';

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { icon: 'md-notifications' },
        { icon: 'md-bicycle' },
        { icon: 'md-briefcase' },
        { icon: 'md-basket' },
        { icon: 'md-cut' },
        { icon: 'md-construct' },
        { icon: 'ios-book' },
        { icon: 'md-paw' },
        { icon: 'logo-game-controller-b' },
        { icon: 'md-beer' },
        { icon: 'md-star' },
        { icon: 'md-restaurant' },
        { icon: 'md-musical-notes' },
        { icon: 'md-moon' },
        { icon: 'md-heart' },
        { icon: 'md-car' },
        { icon: 'md-trash' },
        { icon: 'md-mail' },
        { icon: 'md-home' },
        { icon: 'md-football' },
        { icon: 'md-fitness' },
        { icon: 'md-film' }
      ]
    };
  }

  render() {
    const { data } = this.state;
    const { togglePicker, onPressIcon, isShowPicker } = this.props;
    const { container, containerModal, iconsContainer, cancellation } = styles;
    return (
      <Modal animationType="slide" visible={isShowPicker} transparent>
        <TouchableWithoutFeedback onPress={togglePicker}>
          <View style={container}>
            <View data={data} style={containerModal}>
              <ScrollView>
                <View style={iconsContainer}>
                  {data.map(item => {
                    const { icon } = item;
                    return <CategoryIcon icon={icon} onPressIcon={onPressIcon} />;
                  })}
                </View>
              </ScrollView>
              <TouchableOpacity onPress={togglePicker} style={cancellation}>
                <Icon name="md-close-circle-outline" color="#989798" size={35} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}
