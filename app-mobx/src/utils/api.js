import {action} from 'mobx';

import Talk from '../store/Talk';

export default action(function loadData(store) {
  store.loading = true;
  return fetch('/data.json')
    .then((res) => res.json())
    .then(action((data) => {
      store.talks = data.map((talk) => new Talk(talk));
      store.loading = false;
    }))
    .catch(action((e) => {
      store.loading = false;
      throw e;
    }));
});
