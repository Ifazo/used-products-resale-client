import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {
  const {user} = useContext(AuthContext)
  console.log(user);
  const {displayName, email} = user;
  const handleProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const category = form.category.value;
    const name = form.name.value;
    const img = form.img.value;
    const reprice = form.reprice.value;
    const price = form.price.value;
    const year = form.year.value;
    const description = form.description.value;
    const product = { displayName, email, category, name, img, reprice, price, year, description };
    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Product Added Successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      Add A Product
      <form onSubmit={handleProducts}>
      <select className="select select-bordered w-full max-w-xs" name="category">
                <option disabled selected>
                  Select Products catagories...
                </option>
                <option>Surface</option>
                <option>Chromebook</option>
                <option>Macbook</option>
              </select>
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
              placeholder="Product Name"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput2"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Product Image URL
            </label>
            <input
              name="img"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput2"
              placeholder="Product Image URL"
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
              placeholder="Resale Price"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput4"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Original Price
            </label>
            <input
              name="price"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput4"
              placeholder="Original Price"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput5"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Purchase Year
            </label>
            <input
              name="year"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput5"
              placeholder="Purchase Year"
            />
          </div>
        </div>
        <div class="flex justify-center">
          <div class="mb-3 xl:w-96">
            <label
              for="exampleFormControlInput6"
              class="form-label inline-block mb-2 text-gray-700"
            >
              Description
            </label>
            <input
              name="description"
              type="text"
              class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              id="exampleFormControlInput6"
              placeholder="Description"
            />
          </div>
        </div>
        <input className="btn btn-accent w-20" type="submit" value="Submit" />
      </form>
    </>
  );
};

export default AddProduct;
