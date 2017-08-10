import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>0</strong> item left</span>
        <ul className="filters">
          <li>
            <NavLink activeClassName="selected" to="/" exact={true}>All</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/active">Active</NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/completed">Completed</NavLink>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    );
  }
}