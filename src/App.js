import "./App.css";
import Header from "./Components/header";
import Cart from "./Components/cart";
import Home from "./Components/Home/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
