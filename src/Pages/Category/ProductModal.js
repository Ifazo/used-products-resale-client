import React from "react";
import toast from "react-hot-toast";

const ProductModal = ({ product }) => {
  // console.log(product);
  const { name, email, reprice, displayName } = product;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.reprice.value;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const booking = { name, price, displayName, email, phone, location };
    console.log(booking)

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.acknowledged) {
          toast.success("Booking Successful");
        } else {
          toast.error("Booking Failed");
        }
      });
  };
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
            <form onSubmit={handleBooking}>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Product Name
            </label>
            <input
              name="name"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput1"
              value={name}
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Product Resaler Name
            </label>
            <input
              name="displayName"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              value={displayName}
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput3"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Resale Price
            </label>
            <input
              name="reprice"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput3"
              value={reprice}
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput4"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Email id
            </label>
            <input
              name="email"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput4"
              value={email}
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput5"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Phone Number
            </label>
            <input
              name="phone"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput5"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput6"
              class="form-label inline-block mb-2 text-gray-700"
            >
              location
            </label>
            <input
              name="location"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput6"
              placeholder="Your Location"
            />
          </div>
        </div>
        <input className="btn btn-accent w-20" type="submit" value="Submit" />
        <label htmlFor="my-modal" className="btn btn-sm btn-circle mx-5">✕</label>
      </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
