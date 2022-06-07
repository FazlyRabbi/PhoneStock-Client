import React from "react";
import Navbar from "../Shared/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

function Additem() {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const onSubmit = (e) => {
    const productName = e.ProductName;
    const supplerName = e.SupplerName;
    const quantity = e.Quantity;
    const url = e.url;
    const price = e.Price;
    const email = user.email;

    // const product = {
    //   productName,
    //   supplerName,
    //   quantity,
    //   url,
    //   price,
    // };

    fetch(`https://phonestock.herokuapp.com/add`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        productName: productName,
        supplerName: supplerName,
        quantity: quantity,
        url: url,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
  };
  return (
    <div>
      <Navbar />
      <h2 className="text-center text-[20px] font-bold uppercase mt-16">
        Add your product info
      </h2>
      <div className="flex justify-center ">
        <div className="mt-6">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Product Name"
              className="input w-full  mb-8 drop-shadow-lg "
              name="ProductName"
              {...register("ProductName", {
                required: {
                  value: true,
                  message: "Product Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.ProductName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.ProductName.message}
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="Suppler Name "
              className="input w-full mb-8 drop-shadow-lg "
              name="Suppler Name"
              {...register("SupplerName", {
                required: {
                  value: true,
                  message: "SupplerName Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.SupplerName?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.SupplerName.message}
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input w-full mb-8 drop-shadow-lg "
              name="Quantity"
              {...register("Quantity", {
                required: {
                  value: true,
                  message: "Quantity Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.Quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.Quantity.message}
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder="Price "
              className="input w-full mb-8 drop-shadow-lg "
              name="Price"
              {...register("Price", {
                required: {
                  value: true,
                  message: "Price Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.Price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.Price.message}
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder="img url "
              className="input w-full mb-8 drop-shadow-lg "
              name="url"
              {...register("url", {
                required: {
                  value: true,
                  message: "url is Required",
                },
              })}
            />
            <label className="label">
              {errors.url?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.url.message}
                </span>
              )}
            </label>
            <input
              type="submit"
              placeholder="Price "
              className="input w-full bg-accent text-white mb-8 drop-shadow-lg cursor-pointer"
              name="sbmit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Additem;
