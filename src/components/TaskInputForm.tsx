import React, { useState } from 'react';
import { NewTask, Status } from './index';

type Props = {
  taskArr: NewTask[];
  setTaskArr: React.Dispatch<React.SetStateAction<NewTask[]>>;
  status: Status['value'];
};

const TaskInputForm = (props: Props) => {
  const [inputValue, setInputValue] = useState<NewTask['task']>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewTask = () => {
    const newTask: NewTask = {
      id: props.taskArr.length,
      task: inputValue,
      status: '作業中',
    };

    if (!inputValue) return;
    props.setTaskArr([...props.taskArr, newTask]);
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
