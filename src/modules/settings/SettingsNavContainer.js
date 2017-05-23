import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SettingsViewContainer from "./SettingsViewContainer"

class SettingsNavContainer extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    title: 'Settings',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='settings' size={24} color={props.tintColor} />
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
      <SettingsViewContainer />
    );
  }
}

export default SettingsNavContainer;
