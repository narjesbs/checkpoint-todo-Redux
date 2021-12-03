import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import AddTask from './Components/AddTask';
import ListTasks from './Components/ListTasks';

function App() {
  
  return (
    <div className="App">
      <h2>My Todo List</h2>
      <AddTask />
      <ListTasks />
    </div>
  );
}

export default App;
