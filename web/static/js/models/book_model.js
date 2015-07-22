import Backbone from "backbone";

class BookModel extends Backbone.Model {
  urlRoot: "/api/v1/books/"
};

export default BookModel;

