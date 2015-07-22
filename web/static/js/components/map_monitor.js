import React from "react";
import ToDoActions from "../actions/todo_actions";

let MapMonitor = React.createClass({
  handleClick: function() {
    ToDoActions.addItem(Math.random() + '')
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    })
  },
  render: function() {
    debugger;
    let list = this.props.list || [];

    var itemsTree = list.map((item) => {
      return <li key={item}>{item}</li>;
    });

    return (
      <div onClick={this.handleClick}>
        map
        {itemsTree}
      </div>
    );
  }
});

export default MapMonitor
