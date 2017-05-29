import {
  DATA_LOAD,
  DATA_LOAD_DONE,
  DATA_LOAD_ERROR,

  TALK_FAV_TOGGLE,
  TALK_SELECT,
  FILTER_CHANGE
} from './constants';

function loadStart() {
  return {
    type: DATA_LOAD
  };
}

function loadDone(data) {
  return {
    type: DATA_LOAD_DONE,
    data: data
  };
}

function loadError() {
  return {
    type: DATA_LOAD_ERROR
  };
}

export function loadData() {
  return (dispatch) => {
    dispatch(loadStart());
    fetch('/data.json')
      .then((res) => res.json())
      .then(
        (data) => dispatch(loadDone(data)),
        () => dispatch(loadError)
      );
  };
}

export function talkFavToggle() {
  return {
    type: TALK_FAV_TOGGLE
  }
}

export function talkSelect(talk) {
  return {
    type: TALK_SELECT,
    talk: talk
  }
}

export function filterChange(filter) {
  return {
    type: FILTER_CHANGE,
    filter: filter
  }
}
