import Backbone from "backbone";

import BookModel from "../models/book_model"

class BookCollection extends Backbone.Collection {
  // Reference to this collection's model.
  model: BookModel
  url() {
    return "/api/v1/books";
  }
};

export default BookCollection
