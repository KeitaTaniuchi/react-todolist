import React from 'react';
import { NewTask, Status } from './index';

type Props = {
  taskArr: NewTask[];
  setTaskArr: React.Dispatch<React.SetStateAction<NewTask[]>>;
  filteredTaskArr: NewTask[];
};

const ToDoList = (props: Props) => {
  const deleteTask = (id: NewTask['id']) => {
    const taskArrCopy = [...props.taskArr];
    taskArrCopy.splice(id, 1);
    taskArrCopy.forEach((value, index) => {
      value.id = index;
    });
    props.setTaskArr(taskArrCopy);
  };

  const changeStatus = (status: Status['label'], id: NewTask['id']) => {
    const taskArrCopy = [...props.taskArr];
    if (status === '作業中') {
      taskArrCopy[id].status = '完了';
    } else {
      taskArrCopy[id].status = '作業中';
    }
    props.setTaskArr(taskArrCopy);
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
        {props.filteredTaskArr.map((value, index) => {
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
