import React, {PropTypes, Component} from 'react';
import {
  Button,
  View,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const color = () => Math.floor(255 * Math.random());

/**
 * Sample view to demonstrate StackNavigator
 * @TODO remove this module in a live application.
 */
const open = (navigate) => {
  navigate({routeName : 'InfiniteColorStack'})
}

const ContactView = (props) => {
  const {navigate} = props
  const background = `rgba(${color()},${color()},${color()}, 1)`

  const buttonText = 'Open in Stack Navigator';

  return (
      <View style={[styles.container, {backgroundColor: background}]}>
        <Button color='#ee7f06' title={buttonText} onPress={() => open(navigate)}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ContactView;
