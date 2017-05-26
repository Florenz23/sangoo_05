import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import ThreadViewContainer from "./ThreadViewContainer"

class ThreadNavContainer extends Component {
  static displayName = 'ColorView';

  static navigationOptions = {
    title: 'Chat',
    tabBar: () => ({
      icon: (props) => (
        <Icon name='chat' size={24} color={props.tintColor} />
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
      <ThreadViewContainer />
    );
  }
}

export default ThreadNavContainer;
