import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ConnectRadarView from './ConnectRadarView';
import {NavigationActions} from 'react-navigation';
import * as ConnectRadarStateActions from './ConnectRadarState';

export default connect(
  (state) => ({
    posts: state.getIn(['threads', 'posts']),
  }),
  (dispatch) => ({
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      threadStateActions: () => dispatch(ThreadStateActions()),
      ratePostUp: () => dispatch(ThreadStateActions.ratePostUp()),
      ratePostDown: () => dispatch(ThreadStateActions.ratePostDown()),
      addNewPost: () => dispatch(ThreadStateActions.addNewPost()),
      reset: () => dispatch(ThreadStateActions.reset()),
      showPostDetail: (threadId) => dispatch(ThreadStateActions.showPostDetail(threadId)),
    })
)(ConnectRadarView)
