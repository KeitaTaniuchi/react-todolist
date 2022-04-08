import React, { useState } from 'react';
import RadioButton from '../components/RadioButton';
import ToDoList from '../components/ToDoList';
import TaskInputForm from '../components/TaskInputForm';
import { NewTask, Status } from '../components/index';

function App() {
  const [taskArr, setTaskArr] = useState<NewTask[]>([]);
  const [status, setStatus] = useState<Status['value']>('all');

  const filteredTaskArr = (): NewTask[] => {
    if (status === 'all') return taskArr;
    if (status === 'inWork') return taskArr.filter((value) => value.status === '作業中');
    return taskArr.filter((value) => value.status === '完了');
  };

  return (
    <>
      <h1>ToDoリスト</h1>
      <RadioButton taskArr={taskArr} setStatus={setStatus} />
      <ToDoList taskArr={taskArr} setTaskArr={setTaskArr} filteredTaskArr={filteredTaskArr()} />
      <TaskInputForm taskArr={taskArr} setTaskArr={setTaskArr} status={status} />
    </>
  );
}

export default App;
