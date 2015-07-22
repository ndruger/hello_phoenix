import React from "react";
import {Route, Link} from 'react-router';
import mui from "material-ui";

import BookCollection from "../collections/book_collection"
import BackboneMixin from "backbone-react-component";

let ThemeManager = new mui.Styles.ThemeManager();
let RaisedButton = mui.RaisedButton;

let SomeAwesomeComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  render: function() {
    return (
        <RaisedButton label="Default" />
    );
  }

});


let Dashboard = React.createClass({
  // mixins: [backboneMixin, Router.State],
  mixins: [BackboneMixin],
  render: function() {
    // console.log('render', this.state, this.props)
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
  overrideCollection: function() {
    return new BookCollection();
  },
  componentDidMount: function() {
    this.getCollection().fetch();
    // setState 
  }
});

export default Dashboard
