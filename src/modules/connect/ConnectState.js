import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../mock/posts'

// Initial state
const initialState = Map({
  recentContactId : 1,
});

// Actions
const SETRECENTCONTACTID = 'ConnectState/SETRECENTCONTACTID'
// Action creators
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
  switch (action.type) {
    case SETRECENTCONTACTID:
      console.log("setDetail")
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
