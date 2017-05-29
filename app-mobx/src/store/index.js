import {observable, computed} from 'mobx';

class Store {
  @observable loading = false;
  @observable talks = null;
  @observable selectedTalk = null;
  @observable filter = 'main';

  @computed get favorites() {
    return this.talks ? this.talks.filter((talk) => talk.favorite) : [];
  }

  @computed get list() {
    return this.talks ? this.talks.filter((talk) => talk.location === this.filter) : [];
  }
};

export default Store;
