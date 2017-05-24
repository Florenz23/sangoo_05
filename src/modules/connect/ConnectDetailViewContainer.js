import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ConnectDetailView from './ConnectDetailView';
import {NavigationActions} from 'react-navigation';
import * as ConnectDetailStateActions from './ConnectDetailState';

export default connect(
  (state) => ({
    postId: state.getIn(['connectDetail', 'recentContactId']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
    })
)(ConnectDetailView)
