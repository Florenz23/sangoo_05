import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop-symbol-ponyfill';

import posts from '../../../mock/posts'

// Initial state
const initialState = Map({
  posts: posts,
});

// Actions
const INCREMENT = 'CounterState/INCREMENT';
const RATEPOSTUP = 'ThreadState/RATEPOSTUP';
const RATEPOSTDOWN = 'ThreadState/RATEPOSTDOWN';
const ADDNEWPOST = 'ThreadState/ADDNEWPOST';
const SHOWPOSTDETAIL = 'ThreadState/SHOWPOSTDETAIL'
const RESET = 'CounterState/RESET';
// Action creators
export function increment() {
  return {type: INCREMENT};
}
export function reset() {
  return {type: RESET};
}
export function ratePostUp() {
  return {type: RATEPOSTUP};
}
export function ratePostDown() {
  return {type: RATEPOSTDOWN};
}
export function addNewPost() {
  return {type: ADDNEWPOST};
}
export function showPostDetail(postId) {
  return {
    type: SHOWPOSTDETAIL,
    payload : {
      postId : postId
    }
  };
}

// Reducer
export default function ThreadStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);
    case RATEPOSTUP:
      console.log("up")
      return state
    case RATEPOSTDOWN:
      console.log("down")
      return state
    case ADDNEWPOST:
      console.log("add")
      return state
    case SHOWPOSTDETAIL:
      return state.update('recentPostId', value => action.payload.postId);
      case RESET:
        return initialState;
      case RESET:
        return initialState;
    default:
      return state;
  }
}
