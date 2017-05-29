import {observable, extendObservable, computed} from 'mobx';

import Speaker from './Speaker';
import {formatTime, talkId} from '../utils/helpers';

export default class Talk {
  @observable favorite = false;

  constructor(data) {
    extendObservable(this, data);
    this.speaker = data.speaker ? new Speaker(data.speaker) : null;
  }

  @computed get id() {
    return talkId(this);
  }

  @computed get displayStart() {
    return formatTime(this.time.start);
  }

  @computed get displayEnd() {
    return formatTime(this.time.end);
  }

  @computed get day() {
    return this.date === '2017-06-01' ? 'Day 1' : 'Day 2';
  }
}
