import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, filterReducer } from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.number.int({ min: 0, max: 10 }),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.number.int({ min: 1, max: 5 }),
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Cart);
};

export default Context;
