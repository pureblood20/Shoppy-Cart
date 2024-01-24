import React from "react";
import { useAppContext } from "../../Context/context";
import Grid from "./Grid/grid";
import Filter from "./Filter/filter";

const Home = () => {
  const {
    state: { products },
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = useAppContext();

  const transformProducts = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) => {
        return sort === "lowToHigh" ? a.price - b.price : b.price - a.price;
      });
    }

    if (byStock) {
      sortedProduct = sortedProduct.filter((n) => {
        return n.inStock !== 0;
      });
    }

    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((n) => {
        return n.fastDelivery === true;
      });
    }

    if (byRating) {
      sortedProduct = sortedProduct.filter((n) => {
        return n.ratings >= byRating;
      });
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((n) => {
        return n.name.toLowerCase().includes(searchQuery);
      });
    }

    // sortedProduct.map((n) => console.log(n));
    return sortedProduct;
  };
  //   console.log(transformProducts()[0].inStock);
  return (
    <div class="flex flex-row">
      <div class="basis-1/6">
        <Filter />
      </div>
      <div class="basis-5/6">
        <div class="grid grid-cols-3 gap-5 m-2">
          {transformProducts().map((val) => {
            return <Grid product={val} key={val.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
