import {Platform} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';

import CounterViewContainer from '../counter/CounterViewContainer';
import ColorViewContainer from '../colors/ColorViewContainer';
import ThreadNavContainer from '../chat/chatMain/ThreadNavContainer';
import ThreadDetailViewContainer from '../chat/chatDetail/ThreadDetailViewContainer';
import ConnectRadarViewContainer from '../connectRadar/ConnectRadarViewContainer';
import ContactsNavContainer from '../contacts/contactsMain/ContactsNavContainer';
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
  Contacts : {screen: ContactsNavContainer},
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
