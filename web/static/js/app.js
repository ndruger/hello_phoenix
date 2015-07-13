import {Socket} from "phoenix"
//import { Router, Route, Link } from 'react-router';
// 

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", chan => {
//   console.log("Success!")
// })


$(function() {
  var Router = window.ReactRouter
  var Route = Router.Route;
  var NotFoundRoute = Router.NotFoundRoute;
  var DefaultRoute = Router.DefaultRoute;
  var Link = Router.Link;
  var RouteHandler = Router.RouteHandler;

  var App = React.createClass({
    render: function () {
      return (
        <div>
          <header>
            <ul>
              <li><Link to="app">Dashboard</Link></li>
              <li><Link to="map">Map</Link></li>
              <li><Link to="settings">Settings</Link></li>
            </ul>
          </header>
          <RouteHandler/>
        </div>
      );
    }
  });

  var Map = React.createClass({
    render: function () {
      return (
        <div>
          map
        </div>
      );
    }
  });

  var Settings = React.createClass({
    render: function () {
      return (
        <div>
          Settings
        </div>
      );
    }
  });

  var Dashboard = React.createClass({
    render: function () {
      return (
        <div>
          Dashboard
        </div>
      );
    }
  });

  var routes = (
    <Route name="app" path="/" handler={App}>
      <DefaultRoute handler={Dashboard}/>
      <Route name="map" handler={Map}/>
      <Route name="settings" handler={Settings}/>
    </Route>
  );

  Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('hello_world'));
  });

  // React.render(
  //   <h1 className="jumbotron">Hello from React!!!</h1>,
  //   document.getElementById('hello_world')
  // );
});

let App = {
}

export default App
