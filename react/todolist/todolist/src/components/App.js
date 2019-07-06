import React from 'react';
import TodoList from "../container/TodoList";
import AddToDoList from '../container/AddToDoList'
function App() {
  return (
    <div className="App">
      <AddToDoList></AddToDoList>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
