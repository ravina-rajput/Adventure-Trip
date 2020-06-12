import React from 'react';
import { Link } from 'react-router-dom';

export const Trip = ({ trip }) => {
  const { name, images, price, slug } = trip;
  return (
    <article>
      <div className="img-container">
        <img src={images[1]} alt="trip-image" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per trip</p>
        </div>
        <Link className="btn-primary trip-link" to={`/trips/${slug}`}>
          Explore
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};
