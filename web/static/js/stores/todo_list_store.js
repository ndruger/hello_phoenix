import Reflux from "reflux";
import TodoActions from "../actions/todo_actions";

const TodoListStore = Reflux.createStore({
  listenables: [TodoActions],
  
  onAddItem() {
    this.list = this.list || [];
    this.list = this.list.concat(Math.random());
    this.trigger(this.list)
  }
});

export default TodoListStore;
