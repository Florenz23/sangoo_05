import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ConnectView from './ConnectView';
import {NavigationActions} from 'react-navigation';
import * as ConnectStateActions from './ConnectState'


export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
       navigate: bindActionCreators(NavigationActions.navigate, dispatch),
       setRecentContactId : (contactId ) => dispatch(ConnectStateActions.setRecentContactId(contactId))
    })
)(ConnectView)
