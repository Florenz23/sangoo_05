import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ConnectView from './ConnectView';
import * as ConnectStateActions from './ConnectState'

export default connect(
   null,
   dispatch => {
     return {
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       showContactDetail : (contactId ) => (ConnectStateActions.showContactDetail(threadId))
     };
   }
)(ConnectView);
