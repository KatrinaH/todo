import * as React from 'react';

import { ToDoItem } from './todo-item';
import { Todo } from '../App';

interface MainProps {
  todos: Todo[];
}

export class Main extends React.Component<MainProps> {

  render () {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {this.props.todos.map((item, i) => <ToDoItem key={i} item={item}/>)}
        </ul>
      </section>
    );
  }
}