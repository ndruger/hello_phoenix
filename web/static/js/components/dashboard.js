import React from "react";
import {Route, Link} from 'react-router';

import BookCollection from "../collections/book_collection"
import BackboneMixin from "backbone-react-component";

let Dashboard = React.createClass({
  // mixins: [backboneMixin, Router.State],
  mixins: [BackboneMixin],
  render: function() {
    // console.log('render', this.state, this.props)
    return (
      <div>
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
