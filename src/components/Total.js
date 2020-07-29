import React from 'react';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.features.length === 0 ? props.car.price : props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

export default Total;
