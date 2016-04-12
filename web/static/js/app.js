import i18n from 'i18next-client';
import { createStore } from 'redux';

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default:
    return state;
  }
}

const store = createStore(counter);

store.subscribe(() =>
  console.log(store.getState())
);

window.store = store;

i18n.init({
  lng: 'ja',
  fallbackLng: 'en',
}, (err, t) => {
  if (err) {
    return;
  }
});

const App = {};

console.log('nekoneko');

export default App;

