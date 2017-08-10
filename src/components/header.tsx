import * as React from 'react';

interface HeaderProps {
  addToDo: (item: string) => void;
}

export class Header extends React.Component<HeaderProps> {
  getInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.props.addToDo(e.currentTarget.value);
    }
  }

  render() {
    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus={true}
          name="new-todo"
          onKeyDown={this.getInput}
        />
      </header>
    );
  }
}

// create todo item(separate component) to display in list (main)
