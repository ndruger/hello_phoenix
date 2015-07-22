import React from "react";
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';
import BackboneMixin from "backbone-react-component";

import MapMonitor from "./components/map_monitor";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";

import BookCollection from "./collections/book_collection"

let App = React.createClass({
  mixins: [BackboneMixin],
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="map">MapMonitor</Link></li>
            <li><Link to="settings">Settings</Link></li>
          </ul>
        </header>
        <RouteHandler/>
      </div>
    );
  }
});

let routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard}/>
    <Route name="map" handler={MapMonitor}/>
    <Route name="settings" handler={Settings}/>
  </Route>
);

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.getElementById('hello_world'));
});

export default App;

