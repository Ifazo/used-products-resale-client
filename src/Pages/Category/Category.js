import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
    console.log(category);
  return (
    <>
      
    </>
  );
};

export default Category;
