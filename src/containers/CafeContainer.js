import React from 'react';
import Cafe from './components/Cafe'

const CafeContainer = (props) => {

    return (
      <ul className="cards">
        {
          props.cafes.map(cafe => <Cafe key={cafe.id} cafe={cafe} />)
        }  
      </ul>
    )
  };
  export default CafeContainer;