import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './CarCard.scss';

const CarCard = (props) => {
  // const {
  //   image,
  //   brand,
  //   name,
  //   color,
  //   type,
  //   transmission,
  //   productionDate,
  //   price,
  //   mileage,
  // } = props;

  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames='fade'
    >
      <div className='car-card'>
        <img
          src={[
            'https://www.fonewalls.com/wp-content/uploads/2019/11/Car-Background-Wallpaper-003.jpg',
          ]}
          alt={`brand name`}
        />
        <div className='car-details'>
          <h3>{`brand name`}</h3>
          <p>Color: color</p>
          <p>Type: type</p>
          <p>Transmission: transmission</p>
          <p>Production Date: productionDate</p>
          <p>Price: $price</p>
          <p>Mileage: mileage miles</p>
        </div>
      </div>
    </CSSTransition>
  );
};

export default CarCard;
