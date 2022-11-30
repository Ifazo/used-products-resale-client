import React from "react";

const ProductModal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          
          <div className="modal-action justify-center">
            <label htmlFor="my-modal-6" className="btn btn-primary">
              Submit
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
