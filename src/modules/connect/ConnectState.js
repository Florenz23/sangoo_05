import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../mock/posts'

// Initial state
const initialState = Map({
  recentContactId : 1,
});

const HIREDUCER = 'ThreadState/HIHI'
// Actions
const SETRECENTCONTACTID = 'ConnectState/SETRECENTCONTACTID'
// Action creators
export function hiReducer() {
  return {type: HIREDUCER};
}
export function setRecentContactId(postId) {
  console.log("moin")
  return {
    type: SETRECENTCONTACTID,
    payload : {
      postId : postId
    }
  };
}

// Reducer
export default function ConnectStateReducer(state = initialState, action = {}) {
  console.log("connectState")
  switch (action.type) {
    case SETRECENTCONTACTID:
      console.log("detail")
      return state.update('recentContactId', value => action.payload.contactId);
    case HIREDUCER:
      console.log("hi")
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
