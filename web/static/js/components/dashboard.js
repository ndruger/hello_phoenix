import React from 'react';
import {Route, Link} from 'react-router';
import mui from 'material-ui';

import BookCollection from '../collections/book_collection';
import BackboneMixin from 'backbone-react-component';

const ThemeManager = new mui.Styles.ThemeManager();
const RaisedButton = mui.RaisedButton;

const SomeAwesomeComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render() {
    return (
        <RaisedButton label='Default' />
    );
  }

});

const Dashboard = React.createClass({
  // mixins: [backboneMixin, Router.State],
  mixins: [BackboneMixin],

  render() {
    return (
      <div>
        <SomeAwesomeComponent/>
        {
          this.getCollection().map((item) => {
            return <div>{item.get('id')}</div>;
          })
        }
      </div>
    );
  },

  overrideCollection() {
    return new BookCollection();
  },

  componentDidMount() {
    this.getCollection().fetch();
    // setState
  }
});

export default Dashboard;
