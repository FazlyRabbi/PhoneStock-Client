import React from "react";

function OrderProduct({ a, refetch, index }) {
  const handleDelete = () => {
    fetch(`https://phonestock.herokuapp.com/delete/${a._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        quantity: a.quantity,
      },
    })
      .then((res) => res.json())
      .then(() => refetch());
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td></td>
      <td>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src={a.productImg} />
          </div>
        </div>
      </td>
      <td>{a.quantity}</td>
      <td>{a.suppler}</td>
      <td>{a.price}</td>
      <td>
        <button class="btn btn-xs" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default OrderProduct;
