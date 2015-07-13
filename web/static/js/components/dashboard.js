import BookCollection from "../collections/book_collection"

class Dashboard extends React.Component {
  render() {
    this._requestUpdate();
    
    return (
      <div>
        Dashboard
      </div>
    );
  }
  _requestUpdate() {
    let books = new BookCollection();
    books.fetch();
  }
}


export default Dashboard
