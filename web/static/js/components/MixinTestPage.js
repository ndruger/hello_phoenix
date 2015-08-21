import React from 'react';

const Mixin = {
  propTypes: {
    requiredMixedProp: React.PropTypes.string.isRequired,
    mixedTest() {
      console.log('Mixin customProp');
    },
  },
  getDefaultProps() {
    console.log('Mixin getDefaultProps');
    return {
    };
  },
  getInitialState() {
    console.log('Mixin getInitialState');
    return {
      mixinCount: 1,
    };
  },
  componentWillMount() {
    console.log('Mixin componentWillMount');
  },
  componentDidMount() {
    console.log('Mixin componentDidMount');
  },
  componentWillUnmount() {
    console.log('Mixin componentWillMount');
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('Mixin componentDidUpdate');
  },
  componentWillReceiveProps(nextProps) {
    console.log('Mixin componentWillReceiveProps', arguments);
  },
};

const Todo = React.createClass({
  propTypes: {
    todo: React.PropTypes.object.isRequired,
    count: React.PropTypes.integer.isRequired,
  },

  mixins: [
    Mixin,
  ],

  getInitialState() {
    return {
      count: this.props.count,
      localCount: 1,
    };
  },

  componentWillMount() {
    console.log('Todo componentWillMount');
  },

  componentDidMount() {
    console.log('Todo componentDidMount');
  },

  componentWillReceiveProps(nextProps) {
    console.log('Todo componentWillReceiveProps', arguments);
  },

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Todo shouldComponentUpdate');
    return true;
  },

  componentWillUpdate(nextProps, nextState) {
    console.log('Todo componentWillUpdate');
  },

  componentDidUpdate(prevProps, prevState) {
    console.log('Todo componentDidUpdate');
  },

  componentWillUnmount() {
    console.log('Todo componentWillUnmount');
  },

  render() {
    console.log('Todo render', this.state);
    return (
      <div>
        <div>{this.props.todo.text}: </div>
        <div>props.count = {this.props.count}</div>
        <div>state.count = {this.state.count}</div>
        <div>state.localCount = {this.state.localCount}</div>
        <button onClick={this._countUp.bind(this)}>countUp</button>
      </div>
    );
  },

  _countUp() {
    this.setState({
      localCount: this.state.localCount + 1,
    });
  },
});


const TodoList = React.createClass({
  getDefaultProps() {
    console.log('TodoList getDefaultProps');
    return {
    };
  },
  getInitialState() {
    console.log('TodoList getInitialState');
    return {
      count: 1,
      todos: [
        {id: 1, text: 'item'},
      ],
    };
  },
  _handleClickIncrementCounter(e) {
    console.log('TodoList onClick');
    this.setState({
      count: this.state.count + 1,
    });
  },
  componentWillMount() {
    console.log('TodoList componentWillMount');
  },
  componentWillUnmount() {
    console.log('TodoList componentWillUnmount');
  },
  componentDidMount() {
    console.log('TodoList componentDidMount');
  },
  componentWillReceiveProps(nextProps) {
    console.log('TodoList componentWillReceiveProps', arguments);
  },
  shouldComponentUpdate(nextProps, nextState) {
    console.log('TodoList shouldComponentUpdate');
    return true;
  },
  componentWillUpdate(nextProps, nextState) {
    console.log('TodoList componentWillUpdate');
  },
  componentDidUpdate(prevProps, prevState) {
    console.log('TodoList componentDidUpdate');
  },
  render() {
    console.log('TodoList render', this.state);
    const todos = this.state.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo todo={todo} count={this.state.count}/>
        </li>
      );
    });
    const c = (
      <ul>
        {todos}
        <button onClick={this._handleClickIncrementCounter}>Increment Counter</button>
      </ul>
    );
    console.log(c.props.children);
    return c;
  },
});

export default TodoList;
