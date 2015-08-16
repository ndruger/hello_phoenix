import Backbone from 'backbone';

import BookModel from '../models/BookModel';

class BookCollection extends Backbone.Collection {
  model: BookModel

  url() {
    return '/api/v1/books';
  }
},

export default BookCollection;

