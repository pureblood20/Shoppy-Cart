import { FaStar, FaRegStar } from "react-icons/fa";
import { useAppContext } from "../../../Context/context";

const Filter = () => {
  const {
    filterDispatch,
    filterState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = useAppContext();
  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);
  return (
    <div class="border-2 border-inherit shadow-md shadow-black my-2 ml-2 p-2 leading-10">
      <div class="text-xl font-black">Filter Products</div>
      <input
        type="radio"
        name="sort"
        value="Low to High"
        onClick={() =>
          filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "lowToHigh",
          })
        }
        checked={sort === "lowToHigh" ? true : false}
      />
      <label for="Low to High">Low to High</label>
      <br></br>
      <input
        type="radio"
        name="sort"
        value="High to Low"
        onChange={() =>
          filterDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow",
          })
        }
        checked={sort === "highToLow" ? true : false}
      />
      <label for="High to Low">High to Low</label>
      <br></br>
      <input
        type="checkbox"
        name="stock"
        value="stock"
        onChange={() => filterDispatch({ type: "FILTER_BY_STOCK" })}
        checked={byStock}
      />
      <label for="stock"> Exclude Out of Stock</label>
      <br></br>
      <input
        type="checkbox"
        name="delivery"
        value="delivery"
        onChange={() => filterDispatch({ type: "FILTER_BY_DELIVERY" })}
        checked={byFastDelivery}
      />
      <label for="stock"> Fast delivery only</label>
      <br></br>
      <div class="flex mb-3">
        {[...Array(5)].map((_, i) => {
          return (
            <span
              key={i}
              onClick={() =>
                filterDispatch({ type: "FILTER_BY_RATING", payload: i + 1 })
              }
            >
              {byRating > i ? <FaStar></FaStar> : <FaRegStar></FaRegStar>}
            </span>
          );
        })}
      </div>
      <div class="text-center">
        <button
          class="border border-green-500  px-4 rounded hover:bg-green-600 m-2"
          onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
        >
          Clear Filter
        </button>
      </div>
    </div>
  );
};

export default Filter;
