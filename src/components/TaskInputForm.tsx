import React, { useState } from 'react';
import { ToDo } from 'types/ToDo';

type Props = {
  tasks: ToDo[];
  setTasks: (tasks: ToDo[]) => void;
};

const TaskInputForm: React.FC<Props> = ({ tasks, setTasks }) => {
  const [inputTask, setInputTask] = useState('');

  const addNewTask = () => {
    if (!inputTask) return;

    const newTask: ToDo = {
      id: tasks.length,
      task: inputTask,
      status: 'inWork',
    };

    setTasks([...tasks, newTask]);
    setInputTask('');
  };

  return (
    <form>
      <label htmlFor='new-task'>新規タスクの追加</label>
      <input
        type='text'
        id='new-task'
        name='new-task'
        value={inputTask}
        onChange={(e) => setInputTask(e.target.value)}
        placeholder='タスクを入力'
      ></input>
      <button type='button' onClick={addNewTask}>
        追加
      </button>
    </form>
  );
};

export default TaskInputForm;
