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
    category,
    manzil, 
  } = obj;

  return (
    <div classNames='fade'>
      <div className='car_card'>
        <img
          src={['http://localhost:5227/' + imagePath]}
          alt={`name`}
        />
        <div className='car-details'>
          <h3>
            {`Nomi`}: {name}
          </h3>
          <p>markasi: {category}</p>
          <p>rangi: {color}</p>
          <p>tipi: {type}</p>
          <p>uzatish qutisi: {transmissionIsAutomatic}</p>
          <p>chiqarilgan sana: {madeAt}</p>
          <p>narxi: ${price}</p>
          <p>probeg: {probeg}</p>
          <p>manzil:{manzil}</p>
          <p>izoh:{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
