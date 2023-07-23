import { useState } from "react";
import TodoList from "./views/TodoList";
import Header from "./components/todos/Header";

import "./index.css";

function App() {
  const [length, setLength] = useState(0);

  const todosLength = (length) => {
    setLength(length);
  };

  return (
    <div className="App">
      <Header length={length} />
      <TodoList todosLength={todosLength} />
    </div>
  );
}

export default App;
