
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
class ColorViewChild extends Component {
  static displayName = 'ColorViewChild';

  constructor(props) {
    super(props);
    this.state = {
      background: `rgba(${color()},${color()},${color()}, 1)`
    };
  }

  open = () => {
    this.props.navigate({routeName: 'InfiniteColorStack'});
  };

  render() {
    const buttonText = 'Open in Stack Navigator';
    return (
      <View style={[styles.container, {backgroundColor: this.state.background}]}>
        <Button color='#ee7f06' title={buttonText} onPress={this.open}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ColorViewChild;