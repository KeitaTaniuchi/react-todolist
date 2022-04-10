import React, { useState } from 'react';
import { ToDo, Status } from './index';

type Props = {
  tasks: ToDo[];
  setTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;
  status: Status['value'];
};

const TaskInputForm = (props: Props) => {
  const [inputValue, setInputValue] = useState<ToDo['task']>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTask = () => {
    const newTask: ToDo = {
      id: props.tasks.length,
      task: inputValue,
      status: '作業中',
    };

    if (!inputValue) return;
    props.setTasks([...props.tasks, newTask]);
    setInputValue('');
  };

  return (
    <form>
      <label htmlFor='new-task'>新規タスクの追加</label>
      <input
        type='text'
        id='new-task'
        name='new-task'
        value={inputValue}
        onChange={handleChange}
        placeholder='タスクを入力'
      ></input>
      <button type='button' onClick={addNewTask}>
        追加
      </button>
    </form>
  );
};

export default TaskInputForm;
