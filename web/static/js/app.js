import React from 'react';
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';
import BackboneMixin from 'backbone-react-component';
import i18n from 'i18next-client';
import Reflux from 'reflux';

import Settings from './components/Settings';
import BackboneTestPage from './components/BackboneTestPage';
import MixinTestPage from './components/MixinTestPage';

import TodoListStore from './stores/TodoListStore';
import BookCollection from './collections/BookCollection';

const App = React.createClass({
  mixins: [BackboneMixin, Reflux.connect(TodoListStore, 'list')],

  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='app'>BackboneTestPage</Link></li>
            <li><Link to='settings'>Settings</Link></li>
            <li><Link to='mixintest'>MixinTestPage</Link></li>
          </ul>
        </header>
        <RouteHandler list={this.state.list} />
      </div>
    );
  },
});

const routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={BackboneTestPage}/>
    <Route name='settings' handler={Settings}/>
    <Route name='mixintest' handler={MixinTestPage}/>
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

