import React from "react";
import OrderProduct from "./OrderProduct";
import { useQuery } from "react-query";
function ManageInt() {
  const {
    data: deliverd,
    isLoading,
    refetch,
  } = useQuery("deliverd", () =>
    fetch(`https://phonestock.herokuapp.com/deliverd`).then((res) => res.json())
  );
  if (isLoading) {
    return "loading";
  }

  return (
    <div className="p-4 ">
      <h2 className="font-bold text-[18px]">My Orders: {deliverd.length} </h2>

      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Order Quantity</th>
              <th>Suppler</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {deliverd.map((a, index) => (
              <OrderProduct a={a} refetch={refetch} key={index} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageInt;
