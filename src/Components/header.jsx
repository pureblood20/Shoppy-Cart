import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../Context/context";

const Header = () => {
  const {
    state: { cart },
  } = useAppContext();
  const { filterDispatch } = useAppContext();
  const navigate = useNavigate();
  return (
    <div class="h-20 bg-gray-800 text-white flex flex-row items-center font-serif">
      <Link to="/">
        <div class="basis-1/5 m-6 text-lg">Shopping Cart</div>
      </Link>
      <div class="basis-3/5 m-6">
        <input
          type="text"
          placeholder="Search a product"
          class="shadow-md rounded p-2 w-full text-black"
          onChange={(e) =>
            filterDispatch({
              type: "FILTER_BY_SEARCH",
              payload: e.target.value,
            })
          }
        ></input>
      </div>
      <div class="basis-1/5 m-6 text-right">
        <button
          class="border border-green-500 p-2 px-4 rounded hover:bg-green-600"
          onClick={() => navigate("/cart")}
        >
          Cart &nbsp; {cart.length}
        </button>
      </div>
    </div>
  );
};

export default Header;
