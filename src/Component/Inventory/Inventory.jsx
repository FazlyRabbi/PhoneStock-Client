import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useQuery } from "react-query";

import InvProduct from "./InvProduct";

function Inventory() {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(`https://phonestock.herokuapp.com/products/${id}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return "loading";
  }

  return (
    <div>
      <Navbar />
      <InvProduct product={product} uid={id} refetch={refetch} />
    </div>
  );
}

export default Inventory;
