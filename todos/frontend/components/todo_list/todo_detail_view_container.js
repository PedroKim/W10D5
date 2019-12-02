import {connect} from "react-redux";
import {deleteTodo} from "../../actions/todo_actions";
import TodoDetailView from "./todo_detail_view";

const mdp = dispatch => ({
  removeTodo: todo => dispatch(deleteTodo(todo))
});


export default connect(null, mdp)(TodoDetailView);