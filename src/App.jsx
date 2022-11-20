import './App.css';

import React, { Fragment } from "react";

import InputTodo from './components/inputTodo';
import ListTodos from './components/listTodos';

//** Components */






function App() {
  return <Fragment>
    <div className='container'>
      <InputTodo />
      <ListTodos />
    </div>
  </Fragment>
}

export default App;
