import React from 'react';
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';
import i18n from 'i18next-client';

import Settings from './components/Settings';
import BackboneTestPage from './components/BackboneTestPage';
import MixinTestPage from './components/MixinTestPage';
import BootstrapTestPage from './components/BootstrapTestPage';

const App = React.createClass({
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">BackboneTestPage</Link></li>
            <li><Link to="settings">Settings</Link></li>
            <li><Link to="mixintest">MixinTestPage</Link></li>
            <li><Link to="bootstrap">BootstrapTestPage</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  },
});

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="settings" handler={Settings} />
    <Route name="mixintest" handler={MixinTestPage} />
    <Route name="bootstrap" handler={BootstrapTestPage} />
    <DefaultRoute handler={BackboneTestPage} />
  </Route>
);

i18n.init({
  lng: 'ja',
  fallbackLng: 'en',
}, (err, t) => {
  if (err) {
    return;
  }
  Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('hello_world'));
  });
});

export default App;

