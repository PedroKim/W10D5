import React from 'react';
import {uniqueId} from '../../util/util';

export default class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '', body: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const todo = { 
      // id: uniqueId(),
      title: this.state.title,
      body: this.state.body,
      done: false
     };
    this.props.createTodo(todo).then( () => this.setState({title: "", body: ""}));
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" onChange={this.update("title")} value={this.state.title}/>
        </label>
        <label>
          Body
          <input type="text" onChange={this.update("body")} value={this.state.body} />
        </label>

        <button>Create todo</button>
      </form>
    )
  }
}