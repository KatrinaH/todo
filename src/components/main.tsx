import * as React from 'react';

import { ToDoItem } from './todo-item';

export class Main extends React.Component {

  render () {
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox"/>
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <ToDoItem />
        </ul>
      </section>
    );
  }
}