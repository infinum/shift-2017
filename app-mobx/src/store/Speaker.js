import {extendObservable, computed} from 'mobx';

import {formatTwitter, formatLinkedin, formatGithub} from '../utils/helpers';

export default class Speaker {
  constructor(data) {
    extendObservable(this, data);
  }

  @computed get twitter() {
    return formatTwitter(this.social);
  }

  @computed get linkedin() {
    return formatLinkedin(this.social);
  }

  @computed get github() {
    return formatGithub(this.social);
  }
}
