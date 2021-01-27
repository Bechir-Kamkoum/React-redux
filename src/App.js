import ToDoForm from "./components/Addtask";
import ToDoList from "./components/ListTask";
import FilterDone from "./components/filter";


function App() {
  return (
    <div className="App">
      <ToDoForm />
      <FilterDone />
      <ToDoList />
    </div>
  );
}

export default App;