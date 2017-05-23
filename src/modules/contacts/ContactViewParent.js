import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ContactViewContainer from "./ContactViewContainer"

class ContactViewParent extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    title: 'Colors!',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='color-lens' size={24} color={props.tintColor} />
      )
    }),
    // TODO: move this into global config?
    header: {
      tintColor: 'white',
      style: {
        backgroundColor: '#39babd'
      }
    }
  }

  render() {
    return (
      <ContactViewContainer />
    );
  }
}

export default ContactViewParent;
