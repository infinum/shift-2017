export default function loadData() {
  return fetch('/data.json')
    .then((res) => res.json());
}