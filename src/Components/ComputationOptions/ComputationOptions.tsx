import React, { useEffect, useState } from 'react';

import api, { ComputationOptionCategoryType } from '../../Api/Api';
import ComputationOptionsCategory from './ComputationOptionsCategory';

import './ComputationOption.css';

type ComputationOptionsProps = {
  handleCompute: () => void;
};

const ComputationOptions = ({ handleCompute }: ComputationOptionsProps) => {
  const [options, setOptions] = useState<ComputationOptionCategoryType[]>([]);
  const [idOptionsSelected, setIdOptionsSelected] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.getComputationOptionsData();
      setOptions(results['items']);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(options, idOptionsSelected);
  }, [options, idOptionsSelected]);

  const handleSelectOption = (id: string) => {
    setIdOptionsSelected(
      idOptionsSelected.includes(id)
        ? idOptionsSelected.filter((item) => item != id)
        : [id, ...idOptionsSelected]
    );
  };

  return (
    <div className='ships'>
      {options.map((option) => (
        <ComputationOptionsCategory
          category={option}
          handleSelectOption={handleSelectOption}
          idOptionsSelected={idOptionsSelected}
        />
      ))}

      <div className='launchBox'>
        <button className='launchButton' onClick={handleCompute}>
          Launch computation
        </button>
      </div>
    </div>
  );
};

export default ComputationOptions;
