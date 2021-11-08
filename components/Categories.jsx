import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";




const Categories = () => {
<<<<<<< HEAD
 const [state, setstate] = React.useState([])
  React.useEffect(() => {
    getCategories().then((dulieu)=>setstate(dulieu))

    
     
  }, [])

=======
  
>>>>>>> 41e36f7fc2ebbba5558f06187a4e0b320f476659
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {state.map((category, index) => (
        <Link key={index} href={`/category/${category.slug}`}>
          <span
            className={`cursor-pointer block ${
              index === state.length - 1 ? "border-b-0" : "border-b"
            } pb-3 mb-3`}
          >
            {category.name}
          </span>
        </Link>
      )) }
    </div>
  );
};

export default Categories
