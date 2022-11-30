import React from "react";

const CategoryProduct = (product) => {
    console.log(product.product);
    const {_id, name, img, reprice, price, description, year, displayName } = product.product;
  return (
    <>
      <div className="card lg:card-side shadow-xl">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title justify-center">Name:{name}</h2>
          <div className="flex justify-between">
            <p className="text-gray-500">Resale Price:${reprice}</p>
            <p className="text-gray-500">Original Price:${price}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Posted Time:</p>
            <p className="text-gray-500">Use of Year:{year}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-500">Seller Name:{displayName}</p>
            <p className="text-gray-500">Location:{description}</p>
          </div>
          <div className="card-actions justify-center">
            <label htmlFor="my-modal-6" className="btn btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
