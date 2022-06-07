import React from "react";

function Item({ a, refetch, index }) {

  const handleDelete = () => {
    fetch(`https://phonestock.herokuapp.com/myitem/delete/${a._id}`)
      .then((res) => res.json())
      .then(() => refetch());
  };
  

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-24 mask mask-squircle">
            <img src={a.productImg} />
          </div>
        </div>
      </td>
      <td>{a.name}</td>
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

export default Item;
