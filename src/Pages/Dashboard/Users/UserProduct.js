import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const UserProduct = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myproducts?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user.email]);
  return (
    <>
      <h3 className="text-3xl font-bold text-gray-900">
        Your Ordered products
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Payment</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product, index) => (
              <tr key={products._id}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.reprice}</td>
                <td>{product.category}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserProduct;
