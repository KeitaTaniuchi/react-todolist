import React from 'react';
import { decideLabel } from 'utils/decideLabel';
import { StatusEn } from 'types/StatusEn';
import { ToDo } from 'types/ToDo';

type Props = {
  tasks: ToDo[];
  setTasks: (tasks: ToDo[]) => void;
  filteredTasks: ToDo[];
};

const ToDoList: React.FC<Props> = ({ tasks, setTasks, filteredTasks }) => {
  const deleteTask = (id: number) => {
    const tasksCopy = [...tasks];
    const deletedTasks = tasksCopy.filter((value) => value.id !== id);
    /* 以下の記述は、タスク削除後にIDを0から振り直すためのコード */
    deletedTasks.forEach((value, index) => {
      value.id = index;
    });
    setTasks(deletedTasks);
  };

  const changeStatus = (status: StatusEn, id: number) => {
    const tasksCopy = [...tasks];
    status === 'inWork' ? (tasksCopy[id].status = 'completed') : (tasksCopy[id].status = 'inWork');
    setTasks(tasksCopy);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
      </thead>
      <tbody>
        {filteredTasks.map((value, index) => (
          <tr key={index}>
            <td>{value.id}</td>
            <td>{value.task}</td>
            <td>
              <button
                onClick={() => {
                  changeStatus(value.status, value.id);
                }}
              >
                {decideLabel(value.status)}
              </button>
            </td>
            <td>
              <button
                type='button'
                onClick={() => {
                  deleteTask(value.id);
                }}
              >
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ToDoList;
