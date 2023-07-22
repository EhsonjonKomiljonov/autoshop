import React from 'react';
import './CarCard.scss';

const CarCard = ({ obj }) => {
  const {
    imagePath,
    name,
    color,
    type,
    transmissionIsAutomatic,
    madeAt,
    price,
    description,
    probeg,
    manzil,
    mileage,
  } = obj;

  return (
    <div classNames='fade'>
      <div className='car-card'>
        <img
          src={['http://localhost:5227/' + imagePath]}
          alt={`name`}
        />
        <div className='car-details'>
          <h3>
            {`brand name`} {name}
          </h3>
          <p>Color: {color}</p>
          <p>Type: {type}</p>
          <p>Transmission: {transmissionIsAutomatic}</p>
          <p>Production Date: {madeAt}</p>
          <p>Price: ${price}</p>
          <p>Mileage: {probeg}</p>
          <p>Manzil:{manzil}</p>
          <p>mileage:{mileage}</p>
          <p>Description:{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
