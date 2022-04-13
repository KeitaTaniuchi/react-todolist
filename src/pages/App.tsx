import React, { useState } from 'react';
import RadioButton from 'components/RadioButton';
import ToDoList from 'components/ToDoList';
import TaskInputForm from 'components/TaskInputForm';
import { filteredTasks } from 'utils/filteredTasks';
import { StatusEn } from 'types/StatusEn';
import { ToDo } from 'types/ToDo';

function App() {
  const [tasks, setTasks] = useState<ToDo[]>([]);
  const [status, setStatus] = useState<StatusEn>('all');

  return (
    <>
      <h1>ToDoリスト</h1>
      <RadioButton setStatus={setStatus} />
      <ToDoList tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks(tasks, status)} />
      <TaskInputForm tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default App;
