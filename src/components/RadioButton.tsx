import React from 'react';
import { ToDo, Status } from './index';

type Props = {
  tasks: ToDo[];
  setStatus: React.Dispatch<React.SetStateAction<Status['value']>>;
};

const RadioButton = (props: Props) => {
  const radioButtonOptionList: Status[] = [
    {
      label: '全て',
      value: 'all',
    },
    {
      label: '作業中',
      value: 'inWork',
    },
    {
      label: '完了',
      value: 'completed',
    },
  ];

  const changeStatus = (value: Status['value']) => {
    props.setStatus(value);
  };

  return (
    <form>
      {radioButtonOptionList.map((radioButtonOption, index) => {
        return (
          <label key={index}>
            <input
              type='radio'
              name='status'
              defaultChecked={radioButtonOption.label === '全て'}
              value={radioButtonOption.value}
              onChange={() => {
                changeStatus(radioButtonOption.value);
              }}
            />
            {radioButtonOption.label}
          </label>
        );
      })}
    </form>
  );
};

export default RadioButton;
