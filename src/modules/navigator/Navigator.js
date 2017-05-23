import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import ThreadNavContainer from '../threads/ThreadNavContainer';
import ThreadDetailViewContainer from '../threadDetail/ThreadDetailViewContainer';
import ConnectRadarViewContainer from '../connectRadar/ConnectRadarViewContainer';
import ContactNavContainer from '../contacts/ContactNavContainer';
import SettingsNavContainer from '../settings/SettingsNavContainer';
import ConnectNavContainer from '../connect/ConnectNavContainer';
import ConnectDetailViewContainer from '../connect/ConnectDetailViewContainer';


const headerColor = '#39babd';
const activeColor = 'white';

// TabNavigator is nested inside StackNavigator
// here roots are defined
export const MainScreenNavigator = TabNavigator({
  Chat: {screen: ThreadNavContainer},
  Connect: {screen: ConnectNavContainer},
  Contacs : {screen: ContactNavContainer},
  Settings : {screen: SettingsNavContainer}, }, {
  tabBarOptions: {
    ...Platform.select({
      android: {
        activeTintColor: activeColor,
        indicatorStyle: {backgroundColor: activeColor},
        style: {backgroundColor: headerColor}
      }
    })
  }
});

MainScreenNavigator.navigationOptions = {
  title: 'Sangoo_04',
  header: {
    titleStyle: {color: 'white'},
    style: {
      backgroundColor: headerColor,
      elevation: 0 // disable header elevation when TabNavigator visible
    }
  }
};

// Root navigator is a StackNavigator
const AppNavigator = StackNavigator({
  Home: {screen: MainScreenNavigator},
  InfiniteColorStack: {screen: ConnectRadarViewContainer},
  ThreadDetailViewContainer: {screen: ThreadDetailViewContainer},
  ConnectDetail : {screen: ConnectDetailViewContainer},
});

export default AppNavigator;
