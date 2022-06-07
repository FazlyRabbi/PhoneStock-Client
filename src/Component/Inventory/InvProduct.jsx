import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth } from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

function InvProduct({ product, uid, refetch }) {
  const [user] = useAuthState(auth);

  const { name, price, productImg, quantity, suppler, id } = product;

  const [deliver, setDeliver] = useState("");

  const [restock, setStock] = useState("");

  const navigate = useNavigate();

  const getDeliver = (e) => {
    setDeliver(e.target.value);
  };

  const getRestock = (e) => {
    setStock(e.target.value);
  };

  const putDeliver = () => {
    if (user) {
      fetch(`https://phonestock.herokuapp.com/deliver/${uid}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          deliver: deliver,
          email: user.email,
          id: id,
        },
      })
        .then((res) => res.json())
        .then(() => {
          navigate("/");
          refetch();
        });
    }
  };

  const putRestock = () => {
    fetch(`https://phonestock.herokuapp.com/stock/${uid}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        deliver: restock,
      },
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/");
        refetch();
      });
  };
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center mb-[50px] ">
        <div>
          <div className="card w-86 glass h-[700px] mt-16 mr-6">
            <figure>
              <img src={productImg} alt="mobile" />
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
                Suppler Name :{" "}
                <span className="text-green-500"> {suppler} </span>
              </h3>
              <h3 className="card-title capitalize text-[17px]">
                Price : <span className="text-green-500">{price}$</span>
              </h3>
            </div>
          </div>
        </div>
        <div
          className="mt-16 ml-14
  "
        >
          <div>
            <h1 className="uppercase text-center font-bold mb-4 text-[20px]">
              Delivered Your Product
            </h1>

            <input
              type="number"
              placeholder="Delivered Quantity"
              className="input w-full max-w-xs mb-8  drop-shadow-lg"
              name="Delivered"
              value={deliver}
              onChange={getDeliver}
            />

            <input
              type="submit"
              className="input w-full max-w-xs  uppercase cursor-pointer text-white font-bold btn-error"
              value="Deliver"
              onClick={putDeliver}
            />
          </div>

          <div className="mt-16">
            <h1 className="uppercase text-center font-bold mb-6 text-[20px]">
              Restock Your Product
            </h1>

            <input
              type="number"
              placeholder="Restock Quantity"
              className="input w-full max-w-xs mb-8 drop-shadow-lg "
              name="Restock"
              value={restock}
              onChange={getRestock}
            />

            <input
              type="submit"
              className="input w-full max-w-xs uppercase cursor-pointer font-bold text-white btn-info"
              value="Restock"
              onClick={putRestock}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/manageinvt"
          className="text-xl underline font-bold  text-red-500 mb-[50px] "
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
}

export default InvProduct;
