import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {NavigationActions} from 'react-navigation';
import ConnectView from './ConnectView';
import * as ConnectStateActions from './ConnectState'


export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       setRecentContactId : (contactId ) => (ConnectStateActions.setRecentContactId(contactId))
    })
)(ConnectView)
