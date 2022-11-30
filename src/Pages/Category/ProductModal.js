import React from "react";

const ProductModal = ({product}) => {
    // console.log(product);
    const { name, email, reprice, displayName } = product;
  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Your Ordered product info given below!!
          </h3>
          <div>
            <div class="block p-6 rounded-lg shadow-lg bg-white max-w-md">
              <form>
                <div class="grid grid-cols-2 gap-4">
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      value={name}
                      disabled
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                      value={reprice}
                      disabled
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      value={displayName}
                      disabled
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                      value={email}
                      disabled
                    />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        name="phone"
                      id="exampleInput123"
                      aria-describedby="emailHelp123"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div class="form-group mb-6">
                    <input
                      type="text"
                      class="form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    name="location"
                      id="exampleInput124"
                      aria-describedby="emailHelp124"
                    placeholder="Enter your location"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-action justify-center">
            <label htmlFor="my-modal" className="btn btn-primary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
