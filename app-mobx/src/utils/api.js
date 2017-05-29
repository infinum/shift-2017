import Talk from '../store/Talk';

export default function loadData(store) {
  store.loading = true;
  return fetch('/data.json')
    .then((res) => res.json())
    .then((data) => {
      store.talks = data.map((talk) => new Talk(talk));
      store.loading = false;
    })
    .catch((e) => {
      store.loading = false;
      throw e;
    });
}