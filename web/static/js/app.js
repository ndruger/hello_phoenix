import React from 'react';
import Router, {DefaultRoute, Route, Link, RouteHandler} from 'react-router';
import BackboneMixin from 'backbone-react-component';
import i18n from 'i18next-client';
import Reflux from 'reflux';
import _ from 'lodash';

import MapMonitor from './components/MapMonitor';
import Settings from './components/Settings';
import Dashboard from './components/Dashboard';

import TodoListStore from './stores/TodoListStore';
import BookCollection from './collections/BookCollection';

import reactMixin from 'react-mixin';

const Mixin = {
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
    return true;
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

class Todo extends React.Component {
  constructor(props) {
    super(props); // super may change this.props or this.state
    this._doMixedDefaultProps();
    this._doMixedInitialState();
    _.extend(this.state, {
      count: props.count,
      localCount: 1,
    });
  }
  componentWillMount() {
    console.log('Todo componentWillMount');
  }
  componentDidMount() {
    console.log('Todo componentDidMount');
  }
  componentWillUnmount() {
    debugger;
    console.log('Todo componentWillUnmount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Todo shouldComponentUpdate');
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Todo componentWillUpdate');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Todo componentDidUpdate');
  }
  componentWillReceiveProps(nextProps) {
    console.log('Todo componentWillReceiveProps', arguments);
  }
  _countUp() {
    this.setState({
      localCount: this.state.localCount + 1,
    });
  }
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
  }
}

// Fix getDefaultProps/getInitialState probolem on react es6 class
function fixedMixin(prototype, mixin) {
  if (mixin.getDefaultProps) {
    const orig = prototype._doMixedDefaultProps;
    prototype._doMixedDefaultProps = function() {
      // TODO: check dupulicated key
      this.props = this.props || {};
      _.extend(this.props, orig ? orig.apply(this) : {});
      _.extend(this.props, mixin.getDefaultProps.apply(this));
    };
  } else {
    prototype._doMixedDefaultProps = function() {};
  }
  if (mixin.getInitialState) {
    const orig = prototype._doMixedInitialState;
    prototype._doMixedInitialState = function() {
      // TODO: check dupulicated key
      this.state = this.state || {};
      _.extend(this.state, orig ? orig.apply(this) : {});
      _.extend(this.state, mixin.getInitialState.apply(this));
    };
  } else {
    prototype._doMixedInitialState = function() {};
  }
  const fixedMix = _.omit(mixin, 'getDefaultProps', 'getInitialState');
  reactMixin(prototype, fixedMix);
}

fixedMixin(Todo.prototype, Mixin);

var TodoList = React.createClass({
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
        {id: 1, text: "item"}
      ]
    };
  },
  _handleClickIncrementCounter(e) {
    console.log('TodoList onClick');
    this.setState({
      count: this.state.count + 1
    });
  },
  componentWillMount() {
    console.log('TodoList componentWillMount');
  },
  componentDidMount() {
    console.log('TodoList componentDidMount');
  },
  componentWillUnmount() {
    console.log('TodoList componentWillUnmount');
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
  componentWillReceiveProps(nextProps) {
    console.log('TodoList componentWillReceiveProps', arguments);
  },
  render() {
    console.log('TodoList render', this.state);
    var todos = this.state.todos.map((todo) => {
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
  }
});

React.render(<TodoList />, document.body);
