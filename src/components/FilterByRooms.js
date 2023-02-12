import React from 'react';
import './Filter.css'
const FilterByRooms = (props) => {
    const onChangeListener = (event) => {
        props.onSaveFilterValue(event.target.value)
    };

  return (
    <div className='apartments-filter'>
      <div className='apartments-filter__control'>
        <label>Filter by number of rooms</label>
        <input type = "text" value={props.value} onChange={onChangeListener}/>
      </div>
    </div>
  );
};

export default FilterByRooms;