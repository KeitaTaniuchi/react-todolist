import React from 'react';
import { decideLabel } from 'utils/decideLabel';
import { StatusEn } from 'types/StatusEn';

type Props = {
  setStatus: (status: StatusEn) => void;
};

const RadioButton: React.FC<Props> = ({ setStatus }) => {
  const radioButtonOptions: StatusEn[] = ['all', 'inWork', 'completed'];

  const changeStatus = (value: StatusEn) => {
    setStatus(value);
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
