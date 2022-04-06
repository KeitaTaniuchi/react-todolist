import React from 'react';

const TaskInputForm = () => {
  return (
    <form>
      <label htmlFor='new-task'>新規タスクの追加</label>
      <input type='text' id='new-task' name='new-task' placeholder='タスクを入力'></input>
      <button type='button'>追加</button>
    </form>
  );
};

export default TaskInputForm;
