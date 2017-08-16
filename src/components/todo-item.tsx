import * as React from 'react';
import { Todo } from '../App';

interface ToDoItemProps {
  item: Todo;
}

export const ToDoItem = (props: ToDoItemProps) => (
  <li className="">
    <div className="view">
      <input type="checkbox" className="toggle" checked={props.item.completed}/>
      <label>{props.item.item}</label>
      <button className="destroy" />
    </div>
    <input className="edit" value="Create a TodoMVC template" />
  </li>
);
