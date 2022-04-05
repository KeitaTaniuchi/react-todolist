import React from 'react';
import RadioButton from '../components/RadioButton';
import ToDoList from '../components/ToDoList';
import TaskInputForm from '../components/TaskInputForm';

function App() {
  return (
    <>
      <h1>ToDoリスト</h1>
      <RadioButton />
      <ToDoList />
      <TaskInputForm />
    </>
  );
}

export default App;
