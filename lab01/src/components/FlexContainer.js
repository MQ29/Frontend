import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function FlexContainer({ element: Element, data }) {
  return (
    <div className="d-flex flex-wrap">
    {data.map((item, index) => (
      <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
        <Element {...item} />
      </div>
    ))}
  </div>
  )
}

export default FlexContainer