import React from 'react';
import { ComputationOptionCategoryType } from '../../Api/Api';
import ComputationOptionItem from './ComputationOptionItem';

type ComputationOptionsCategoryProps = {
  category: ComputationOptionCategoryType;
  handleSelectOption: (id: string) => void;
  idOptionsSelected: string[];
};

const ComputationOptionsCategory = ({
  category,
  handleSelectOption,
  idOptionsSelected,
}: ComputationOptionsCategoryProps) => {
  return (
    <div className='ships'>
      <div className='categoryName'>{category.name}</div>
      <div className='categoryItemList'>
        {category.items.map((item) => (
          <ComputationOptionItem
            option={item}
            handleSelectOption={handleSelectOption}
            idOptionsSelected={idOptionsSelected}
          />
        ))}
      </div>
    </div>
  );
};

export default ComputationOptionsCategory;
