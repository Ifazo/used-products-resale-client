import React from "react";

const BookInfo = () => {
  return (
    <>
      Booking info is listed here
      <div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="formControlInput1"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Disabled input
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="formControlInput1"
              placeholder="Name input"
              aria-label="Disabled name input example"
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="formControlInput2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Disabled input
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="formControlInput2"
              placeholder="Name input"
              aria-label="Disabled name input example"
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="formControlInput3"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Disabled input
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="formControlInput3"
              placeholder="Name input"
              aria-label="Disabled name input example"
              disabled
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="formControlInput4"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Disabled input
            </label>
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="formControlInput4"
              placeholder="Name input"
              aria-label="Disabled name input example"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookInfo;
