import * as React from 'react';

import { Header } from './components/header';
import { Main } from './components/main';
import { Footer } from './components/footer';

interface Todo {
  completed: boolean;
  item: string;
}

interface AppState {
  todos: Todo[];
}

class App extends React.Component<{}, AppState> {
// first type in class declaration is props, second is type of state

  constructor(props: {}) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  addToDo = (item: string) => {
    const todo: Todo = {
      completed: false,
      item
    };
    const todos: Todo[] = this.state.todos.concat(todo);
    this.setState({todos});
  }

  render() {
    return (
      <section className="todoapp">
        <Header addToDo={this.addToDo}/>
        <Main />
        <Footer />
      </section>
    );
  }
}

export default App;
