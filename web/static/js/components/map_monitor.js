import React from 'react';
import ToDoActions from '../actions/todo_actions';

const MapMonitor = React.createClass({
  handleClick() {
    ToDoActions.addItem(Math.random() + '');
  },

  componentWillReceiveProps(nextProps) {
    this.setState({
      list: nextProps.list
    });
  },

  render() {
    const list = this.props.list || [];

    const itemsTree = list.map((item) => {
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

export default MapMonitor;

