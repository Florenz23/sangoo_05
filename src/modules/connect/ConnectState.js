import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../mock/posts'

// Initial state
const initialState = Map({
  recentContactId : 1,
});

console.log(initialState)

// Actions
const SHOWCONTACTDETAIL = 'ThreadState/SHOWCONTACTDETAIL'
// Action creators
export function showPostDetail() {
  return {type: SHOWCONTACTDETAIL
  };
}

// Reducer
export default function ConnectStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SHOWCONTACTDETAIL:
      console.log("detail")
      return state.update('recentContactId', value => action.payload.contactId);
      case RESET:
        return initialState;
    default:
      return state;
  }
}
