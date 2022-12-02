import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { email } = user;
  // console.log(email);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myproducts?email=${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [email]);
  return (
    <>
    <h3 className="text-3xl font-bold text-gray-900">All product of Seller</h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Advertize</th>
            </tr>
          </thead>

          <tbody>
            {
              products.map((product, index) => <tr key={products._id}>
              <th>{index+1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>Blue</td>
              <td><button className="btn btn-primary btn-sm">Delete</button></td>
            </tr>)
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyProducts;
