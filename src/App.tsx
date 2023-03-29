import NewTodo from "./\bcomponents/NewTodo";
import Todos from "./\bcomponents/Todos";
import TodoContextProvider from "./store/todos-context";


function App() {
  // const todos = [
  //   new Todo('Learn React'),
  //   new Todo('Learn TypeScript'),
  //   new Todo('Do Project'),
  // ];
  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos />
    </TodoContextProvider>
  );
}

export default App;
