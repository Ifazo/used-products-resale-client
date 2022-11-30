import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import ProductModal from "./ProductModal";

const Category = () => {
  const category = useLoaderData();
  // console.log(category);
  const {_id, name} = category;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/products?category=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      });
  }, [name]);

  return (
    <>
    <div className="m-5">
      {
        products.map(product => <CategoryProduct key={_id} product={product}></CategoryProduct>)
      }
    </div>
    <div>
      {
        products.map(product => <ProductModal key={_id} product={product}></ProductModal>)
      }
    </div>
    </>
  );
};

export default Category;
