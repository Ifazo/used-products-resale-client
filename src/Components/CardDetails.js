import React from 'react';
import { Link } from 'react-router-dom';

const cardDetails = ({category}) => {
  const {_id, name, details} = category;
    return (
        <div>
            <div key={_id} category={category} className="card shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://placeimg.com/400/225/arch"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{details}</p>
          <div className="card-actions">
            <Link to={`/category/${name}`} className="btn btn-primary">Browse Now</Link>
          </div>
        </div>
      </div>
        </div>
    );
};

export default cardDetails;