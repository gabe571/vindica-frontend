import React from 'react';
import Cafes from './Cafes'

const CafesContainer = (props) => {

    return (
      <ul className="cafecards">
        {
          props.cafes.map(cafe => <Cafes key={cafe.id} cafe={cafe} delete={props.delete} edit={props.edit}/>)
        }  
      </ul>
    )
  };
  export default CafesContainer;