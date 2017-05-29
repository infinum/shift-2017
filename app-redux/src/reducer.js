import {
  DATA_LOAD,
  DATA_LOAD_DONE,
  DATA_LOAD_ERROR,

  TALK_FAV_TOGGLE,
  TALK_SELECT,
  FILTER_CHANGE
} from './constants';

import {selectedTalk} from './selectors';

const initialState = {
  loading: false,
  talks: null,
  filter: 'main',
  selectedTalk: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case DATA_LOAD:
      return {...state, loading: true};
    case DATA_LOAD_DONE:
      return {...state, loading: false, talks: action.data};
    case DATA_LOAD_ERROR:
      return {...state, loading: false};

    case TALK_FAV_TOGGLE:
      const selectedTalkItem = selectedTalk(state, state.selectedTalk);
      const index = state.talks.indexOf(selectedTalkItem);
      const talk = {...selectedTalkItem, favorite: !selectedTalkItem.favorite};
      return {...state, talks: [...state.talks.slice(0, index), talk, ...state.talks.slice(index + 1)]};

    case TALK_SELECT:
      return {...state, selectedTalk: action.talk};
    case FILTER_CHANGE:
      return {...state, filter: action.filter};
    default:
      return state;
  }
};
