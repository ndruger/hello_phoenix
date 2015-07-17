import {Socket} from "phoenix";
// import BackboneReactMixin from 'backbone-react-component';

import MapMonitor from "./components/map_monitor";
import Settings from "./components/settings";
import Dashboard from "./components/dashboard";

let Router = ReactRouter;
let {Route, DefaultRoute, Link, RouteHandler} = Router;

class App extends React.Component {
  render() {
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
};

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

