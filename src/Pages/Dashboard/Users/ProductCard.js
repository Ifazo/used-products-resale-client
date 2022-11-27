import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, reprice, description } = product;


  
  return (
    <div>
      <div>
        <div class="relative">
          <div class="relative w-full h-72 rounded-lg overflow-hidden">
            <img
              src={img}
              alt=""
            />
          </div>
          <div class="relative mt-4">
            <h3 class="text-sm font-medium text-gray-900">{name}</h3>
            <p class="mt-1 text-sm text-gray-500">{description}</p>
          </div>
          <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
            <div
              aria-hidden="true"
              class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
            ></div>
            <p class="relative text-lg font-semibold text-white">${reprice}</p>
          </div>
        </div>
        <div class="mt-6">
          <button
            class="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
