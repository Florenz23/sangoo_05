import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ContactsView from './ContactsView';
import {NavigationActions} from 'react-navigation';
import * as ContactsStateActions from '../contactsMain/ContactsState';

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
      showPostDetail: (threadId) => dispatch(ContactsStateActions.showPostDetail(threadId)),
    })
)(ContactsView)


// export default connect(
//   (state) => ({
//     recievePost: state.app.initialStatePost
//   }),
//   (dispatch) => ({
//     editPost: (dispatchPost) => dispatch(actions.postActionName(dispatchPost)),
//   })
// )(App)
