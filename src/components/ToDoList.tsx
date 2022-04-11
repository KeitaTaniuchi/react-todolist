import React from 'react';
import { decideLabel } from 'utils/decideLabel';
import { ToDo, StatusEn } from 'types/index';

type Props = {
  tasks: ToDo[];
  setTasks: (tasks: ToDo[]) => void;
  filteredTasks: ToDo[];
};

const ToDoList: React.FC<Props> = (props) => {
  const deleteTask = (id: number) => {
    const tasksCopy = [...props.tasks];
    const deletedTasks = tasksCopy.filter((value) => value.id !== id);
    /* 以下の記述は、タスク削除後にIDを0から振り直すためのコード */
    deletedTasks.forEach((value, index) => {
      value.id = index;
    });
    props.setTasks(deletedTasks);
  };

  const changeStatus = (status: StatusEn, id: number) => {
    const tasksCopy = [...props.tasks];
    status === 'inWork' ? (tasksCopy[id].status = 'completed') : (tasksCopy[id].status = 'inWork');
    props.setTasks(tasksCopy);
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
        {props.filteredTasks.map((value, index) => (
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
