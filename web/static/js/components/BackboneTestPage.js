import React from 'react';
import mui from 'material-ui';

import BookCollection from '../collections/BookCollection';
import BackboneMixin from 'backbone-react-component';

const ThemeManager = new mui.Styles.ThemeManager();
const RaisedButton = mui.RaisedButton;

const SomeAwesomeComponent = React.createClass({

  childContextTypes: {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme(),
    };
  },

  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

const BackboneTestComponent = React.createClass({
  // mixins: [backboneMixin, Router.State],
  mixins: [BackboneMixin],

  componentDidMount() {
    this.getCollection().fetch();
    // setState
  },

  render() {
    return (
      <div>
        <SomeAwesomeComponent/>
        {
          this.getCollection().map((item) => {
            return <div key={item.get('id')}>{item.get('id')}</div>;
          })
        }
      </div>
    );
  },

  overrideCollection() {
    return new BookCollection();
  },

});

export default BackboneTestComponent;
