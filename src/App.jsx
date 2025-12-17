import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import AllProducts from "./pages/all products/AllProducts";
import SingleProduct from "./pages/single product/SingleProduct";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<AllProducts />}/>
        <Route path="/product/:id" element={<SingleProduct />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
