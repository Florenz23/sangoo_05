import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../mock/posts'

// Initial state
const initialState = Map({
  recentContactId : 1,
});

console.log(initialState)

// Actions
const SETRECENTCONTACTID = 'ThreadState/SETRECENTCONTACTID'
// Action creators
export function setRecentContactId(contactId) {
  return {
    type: SETRECENTCONTACTID,
    payload: {
      contactId : contactId
    }
  };
}

// Reducer
export default function ConnectStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETRECENTCONTACTID:
      console.log("detail")
      return state.update('recentContactId', value => action.payload.contactId);
    default:
      return state;
  }
}
