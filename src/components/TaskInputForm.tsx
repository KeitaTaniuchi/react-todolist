import React, { useState } from 'react';

const TaskInputForm = () => {
  const [newTask, setNewTask] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(() => e.target.value);
  };

  return (
    <form>
      <label htmlFor='new-task'>新規タスクの追加</label>
      <input
        type='text'
        id='new-task'
        name='new-task'
        onChange={handleChange}
        placeholder='タスクを入力'
      ></input>
      <button type='button'>追加</button>
    </form>
  );
};

export default TaskInputForm;
