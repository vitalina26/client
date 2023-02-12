import React from 'react';
import './Filter.css'
const SortByPrice = (props) => {
    const onChangeListener = (event) => {
        props.onSaveOrderValue(event.target.value)
    };
  return (
    <div className='apartments-filter'>
      <div className='apartments-filter__control'>
        <label>Sort by</label>
        <select value={props.value} onChange={onChangeListener}>
          <option value='desc'> In descending order</option>
          <option value='asc'>In ascending order</option>
        </select>
      </div>
    </div>
  );
};

export default SortByPrice;