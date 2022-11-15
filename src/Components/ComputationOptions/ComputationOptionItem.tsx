import React from 'react';
import { ComputationOptionType } from '../../Api/Api';

type ComputationOptionItemProps = {
  option: ComputationOptionType;
  handleSelectOption: (id: string) => void;
  idOptionsSelected: string[];
};

const ComputationOptionItem = ({
  option,
  handleSelectOption,
  idOptionsSelected,
}: ComputationOptionItemProps) => {
  return (
    <div
      className={`computationOption ${
        idOptionsSelected.includes(option.id) ? 'selected' : ''
      }`}
    >
      <span className='computationOptionName'>{option.name}</span>
      <img className='computationOptionImg' src={option.photoUrL} />
      <button
        className='computationOptionButton'
        onClick={() => handleSelectOption(option.id)}
      >
        Select
      </button>
    </div>
  );
};

export default ComputationOptionItem;
