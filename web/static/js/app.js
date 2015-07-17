import {Socket} from "phoenix";
// import BackboneReactMixin from 'backbone-react-component';

import MapMonitor from "./components/map_monitor";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";

import BookCollection from "./collections/book_collection"

let Router = ReactRouter;
let {Route, DefaultRoute, Link, RouteHandler} = Router;

// var collection = new Backbone.Collection([
//   {id: 0, helloWorld: 'Hello world!'},
//   {id: 1, helloWorld: 'Hello world!'}
// ]);
var collection = new BookCollection();

let App = React.createClass({
  mixins: [Backbone.React.Component.mixin],
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
        <RouteHandler collection={collection}/>
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

