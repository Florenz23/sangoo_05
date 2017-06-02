import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadDetailView from './ThreadDetailView';
import {NavigationActions} from 'react-navigation';
import * as ThreadDetailStateActions from '../chatDetail/ThreadDetailState';

export default connect(
  (state) => ({
    postId: state.getIn(['threadDetail', 'recentPostId']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
    })
)(ThreadDetailView)
