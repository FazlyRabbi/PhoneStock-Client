import React from "react";
import Navbar from "../Shared/Navbar";
import { useQuery } from "react-query";
import Item from "./Item";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";

function Myitem() {
  const [user, loading, error] = useAuthState(auth);

  const {
    data: myitems,
    isLoading,
    refetch,
  } = useQuery("myitems", () =>
    fetch(`https://phonestock.herokuapp.com/myitems?email=${user?.email}`).then(
      (res) => res.json()
    )
  );

  if (isLoading) {
    return "loading";
  }

  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="p-4 mt-16 ">
        <h2 className="font-bold text-[20px] text-center mb-2">
          My Items : {myitems.length}{" "}
        </h2>

        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Photo</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Suppler</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {myitems.map((a, index) => (
                <Item a={a} refetch={refetch} key={index} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Myitem;
