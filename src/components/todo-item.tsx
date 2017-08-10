import * as React from 'react';

export class ToDoItem extends React.Component {
  
  render() {
    return (
      <li className="completed">
        <div className="view">
          <input type="checkbox" className="toggle" checked={true}/>
          {/* <label>Get Comfy with React! 🛋</label> */}
          <label>Get Comfy with React! 🛋</label>
          <button className="destroy" />
        </div>
        <input className="edit" value="Create a TodoMVC template" />
      </li>
    );
  }
}