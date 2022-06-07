import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const { id, _id, name, price, productImg, quantity, suppler } = product;

  return (
    <div className="card w-96 glass mt-16 mr-6">
      <figure>
        <img src={productImg} alt="car!" className="h-[300px] pt-6" />
      </figure>
      <div className="card-body items-center ">
        <h2 className="card-title capitalize text-[20px]  font-bold text-right text-accent">
          {name}
        </h2>
        <h2 className="card-title capitalize text-[17px]">
          Quantity : {quantity}
          <span className="text-green-500">Pec</span>
        </h2>
        <h3 className="card-title capitalize text-[17px]">
          Suppler Name : <span className="text-green-500"> {suppler} </span>
        </h3>
        <h3 className="card-title capitalize text-[17px]">
          Price : <span className="text-green-500">{price}$</span>
        </h3>

        <div className="card-actions justify-center mt-2">
          <Link
            to={`/inventory/${_id}`}
            // onClick={handleDelivered}
            className="btn btn-neutral  btn-sm text-white "
          >
            Update
          </Link>
        </div>
      </div>
    </div>
  );
}
