import {talkId} from './utils/helpers';

export function selectedTalk(state, selected) {
  return state.talks ? state.talks.find((talk) => talkId(talk) === selected) : [];
}

export function favorites(state) {
  return state.talks ? state.talks.filter((talk) => talk.favorite) : [];
}

export function listTalks(state, filter) {
  return state.talks ? state.talks.filter((talk) => talk.location === filter) : [];
}
