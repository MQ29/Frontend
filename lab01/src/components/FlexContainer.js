import React from 'react';
import useData from '../data/useData';

function FlexContainer({ element: Element }) {
  const items = useData(); 

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Element key={item.id} {...item} />
      ))}
    </div>
  );
}

export default FlexContainer;
