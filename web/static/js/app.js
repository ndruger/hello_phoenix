import {Socket} from "phoenix"
//import { Router, Route, Link } from 'react-router';

import Test from "./test"
import MapMonitor from "./components/map_monitor"
import Settings from "./components/settings"
import Dashboard from "./components/dashboard"

// bower about "react-router" makes problem on webpackUniversalModuleDefinition
let Router = window.ReactRouter
let Route = Router.Route;
let NotFoundRoute = Router.NotFoundRoute;
let DefaultRoute = Router.DefaultRoute;
let Link = Router.Link;
let RouteHandler = Router.RouteHandler;

let App = React.createClass({
  render: function () {
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

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.getElementById('hello_world'));
});

export default App
