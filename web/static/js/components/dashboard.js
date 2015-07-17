import BookCollection from "../collections/book_collection"

let Dashboard = React.createClass({
  mixins: [Backbone.React.Component.mixin, ReactRouter.State],
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
