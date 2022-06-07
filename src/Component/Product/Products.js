import React, { useEffect, useState } from "react";
import Product from "./Product";

export default function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://phonestock.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div className="container mx-auto pb-16 ">
      <h1 className="uppercase  font-bold text-center text-[30px] mb-2">
        Mobile Items
      </h1>
      <div className="flex justify-center flex-wrap">
        {product?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
