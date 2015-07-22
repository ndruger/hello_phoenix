import Reflux from "reflux";
import TodoActions from "../actions/todo_actions";

let TodoListStore = Reflux.createStore({
  listenables: [TodoActions],
  onAddItem: function() {
    this.list = this.list || [];
    this.list = this.list.concat(Math.random());
    this.trigger(this.list)
  }
});

export default TodoListStore;
