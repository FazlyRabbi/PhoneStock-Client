import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      {user && (
        <li>
          <Link to="/additem">Add Item</Link>
        </li>
      )}
      {user && (
        <li>
    <Link to="/manageinvt">Manage Inventory</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="/myitem">My Items</Link>
        </li>
      )}
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      <li>
        {user ? (
          <button class="btn  btn-neutral text-white" onClick={logout}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </li>
    </>
  );

  return (
    <div className="container mx-auto ">
      <div class="navbar  justify-evenly flex-wrap">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 text-[16px] font-bold p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to="/"
            class=" cursor-pointer normal-case font-bold text-xl tex-blue"
          >
            PhoneStock
          </Link>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0  font-semibold   text-[16px]">
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
