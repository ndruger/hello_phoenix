import {Socket} from "phoenix"
//import { Router, Route, Link } from 'react-router';
//import Router from "react-router"

// let socket = new Socket("/ws")
// socket.connect()
// let chan = socket.chan("topic:subtopic", {})
// chan.join().receive("ok", chan => {
//   console.log("Success!")
// })


$(function() {
//  console.log(Router)

  React.render(
    <h1 className="jumbotron">Hello from React!!!</h1>,
    document.getElementById('hello_world')
  );
});

let App = {
}

export default App
