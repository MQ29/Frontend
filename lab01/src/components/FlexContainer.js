import React, { useReducer } from 'react';
import AppReducer from '../data/AppReducer';

function FlexContainer({ element: Element, data }) {
  const [items, dispatch] = useReducer(AppReducer, data);

  return (
    <div className="d-flex flex-wrap">
      {items.map(item => (
        <Element
          key={item.id}
          {...item}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default FlexContainer;
