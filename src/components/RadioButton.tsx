import React from 'react';

const RadioButton = () => {
  type RadioButton = { label: string; value: string }[];

  const radioButtonOptionList: RadioButton = [
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
  return (
    <form>
      {radioButtonOptionList.map((radioButtonOption, index) => {
        return (
          <label key={index}>
            <input type='radio' name='status' value={radioButtonOption.value} />
            {radioButtonOption.label}
          </label>
        );
      })}
    </form>
  );
};

export default RadioButton;
