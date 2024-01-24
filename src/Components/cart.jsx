import React, { useState, useEffect } from "react";
import { useAppContext } from "../Context/context";
import { FaCirclePlus, FaCircleMinus, FaTrashCan } from "react-icons/fa6";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = useAppContext();
  const [total, setTotal] = useState();

  // const handleQtyMinus = (id) => {
  //   cart.map((c) => {
  //     if (id === c.id) {
  //       return { ...c, qty: Number(c.qty) + 1 };
  //     } else {
  //       return c.qty;
  //     }
  //   });
  // };

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div class="flex flex-row">
          <div class="basis-5/6">
            <div class="grid grid-cols-1 ">
              {cart.map((c) => {
                return (
                  <div
                    key={c.id}
                    class="flex flex-row border-2 border-inherit shadow-md shadow-black font-mono p-2 m-2 items-center text-center"
                  >
                    <img src={c.image} alt="" class="basis-3/12 h-40" />
                    <div class="basis-4/12">{c.name}</div>
                    <div class="basis-1/12">{c.price}</div>
                    <FaCircleMinus class="basis-1/12"></FaCircleMinus>
                    <div class="basis-1/12">{c.qty} </div>
                    <FaCirclePlus
                      onClick={() => {
                        dispatch({
                          type: "PLUS_CART_QTY",
                          payload: { id: c.id },
                        });
                      }}
                      class="basis-1/12"
                    ></FaCirclePlus>
                    <FaTrashCan
                      onClick={() => {
                        dispatch({ type: "REMOVE_FROM_CART", payload: c });
                      }}
                      class="basis-1/12"
                    ></FaTrashCan>
                  </div>
                );
              })}
            </div>
          </div>
          <div class="basis-1/6">
            <div class="border-2 border-inherit shadow-md shadow-black my-2 ml-2 p-2 leading-10">
              <div class="text-xl">Sub total of {cart.length} items</div>
              <div class="font-black">TOTAL : INR {total}</div>
              <button class="border border-green-500 rounded hover:bg-green-600 px-2 ">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Cart is Empty</div>
      )}
    </div>
  );
};

export default Cart;
