import React from 'react';
import { ToDo, Status } from './index';

type Props = {
  tasks: ToDo[];
  setTasks: React.Dispatch<React.SetStateAction<ToDo[]>>;
  filteredTasks: ToDo[];
};

const ToDoList = (props: Props) => {
  const deleteTask = (id: ToDo['id']) => {
    const tasksCopy = [...props.tasks];
    tasksCopy.splice(id, 1);
    tasksCopy.forEach((value, index) => {
      value.id = index;
    });
    props.setTasks(tasksCopy);
  };

  const changeStatus = (status: Status['label'], id: ToDo['id']) => {
    const tasksCopy = [...props.tasks];
    if (status === '作業中') {
      tasksCopy[id].status = '完了';
    } else {
      tasksCopy[id].status = '作業中';
    }
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
        {props.filteredTasks.map((value, index) => {
          return (
            <tr key={index}>
              <td>{value.id}</td>
              <td>{value.task}</td>
              <td>
                <button
                  onClick={() => {
                    changeStatus(value.status, value.id);
                  }}
                >
                  {value.status}
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
          );
        })}
      </tbody>
    </table>
  );
};

export default ToDoList;
