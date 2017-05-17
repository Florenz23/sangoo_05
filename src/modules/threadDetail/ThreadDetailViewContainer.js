import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ThreadDetailView from './ThreadDetailView';
import {NavigationActions} from 'react-navigation';
import * as ThreadDetailStateActions from '../threadDetail/ThreadDetailState';

export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
    })
)(ThreadDetailView)
