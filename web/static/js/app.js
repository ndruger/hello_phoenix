import React from 'react';
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';
import BackboneMixin from 'backbone-react-component';
import i18n from 'i18next-client';
import Reflux from 'reflux';

import MapMonitor from './components/MapMonitor';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';
import MixinTest from './components/MixinTest';

import TodoListStore from './stores/TodoListStore';
import BookCollection from './collections/BookCollection';

const App = React.createClass({
  mixins: [BackboneMixin, Reflux.connect(TodoListStore, 'list')],

  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='app'>Dashboard</Link></li>
            <li><Link to='map'>MapMonitor</Link></li>
            <li><Link to='settings'>Settings</Link></li>
            <li><Link to='mixintest'>MixinTest</Link></li>
          </ul>
        </header>
        <RouteHandler list={this.state.list} />
      </div>
    );
  },
});

const routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name='map' handler={MapMonitor}/>
    <Route name='settings' handler={Settings}/>
    <Route name='mixintest' handler={MixinTest}/>
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

