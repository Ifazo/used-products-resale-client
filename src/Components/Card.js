import React, { useEffect, useState } from "react";
import CardDetails from "./CardDetails";

const Card = ({category}) => {

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
    .then(res => res.json())
    .then(data => setCategories(data))
  }, [])
  

  return (
    <>
    <h1 className="text-3xl">Categories</h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {
        categories.map(category => <CardDetails key={categories._id} category={category} ></CardDetails>)
      }
      </div>
    </>
  );
};

export default Card;
