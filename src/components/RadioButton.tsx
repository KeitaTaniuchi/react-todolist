import React from 'react';
import { decideLabel } from 'utils/decideLabel';
import { ToDo, StatusEn } from 'types/index';

type Props = {
  tasks: ToDo[];
  setStatus: (status: StatusEn) => void;
};

const RadioButton: React.FC<Props> = (props) => {
  const radioButtonOptions: StatusEn[] = ['all', 'inWork', 'completed'];

  const changeStatus = (value: StatusEn) => {
    props.setStatus(value);
  };

  return (
    <form>
      {radioButtonOptions.map((radioButtonOption, index) => (
        <label key={index}>
          <input
            type='radio'
            name='status'
            defaultChecked={radioButtonOption === 'all'}
            value={radioButtonOption}
            onChange={() => {
              changeStatus(radioButtonOption);
            }}
          />
          {decideLabel(radioButtonOption)}
        </label>
      ))}
    </form>
  );
};

export default RadioButton;
