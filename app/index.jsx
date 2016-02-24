// You can also include here commons if you want with import 'react-toolbox/lib/commons';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import Drawer from 'react-toolbox/lib/drawer';
import App from './app';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

// store.dispatch(fetchResources('awesome-javascript'))
// .then(() => console.log(store.getState()))

// fetch('/awesome-javascript')
//   .then(response => response.json())
//   .then(json => Object.assign(data, JSON.parse(json)));


class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

ReactDOM.render((
  <Root />
), document.getElementById('app'));
