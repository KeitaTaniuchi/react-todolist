import React, { useState } from 'react';
import RadioButton from '../components/RadioButton';
import ToDoList from '../components/ToDoList';
import TaskInputForm from '../components/TaskInputForm';
import { ToDo, Status } from '../components/index';

function App() {
  const [tasks, setTasks] = useState<ToDo[]>([]);
  const [status, setStatus] = useState<Status['value']>('all');

  const filteredTasks = (): ToDo[] => {
    if (status === 'all') return tasks;
    if (status === 'inWork') return tasks.filter((value) => value.status === '作業中');
    return tasks.filter((value) => value.status === '完了');
  };

  return (
    <>
      <h1>ToDoリスト</h1>
      <RadioButton tasks={tasks} setStatus={setStatus} />
      <ToDoList tasks={tasks} setTasks={setTasks} filteredTasks={filteredTasks()} />
      <TaskInputForm tasks={tasks} setTasks={setTasks} status={status} />
    </>
  );
}

export default App;
