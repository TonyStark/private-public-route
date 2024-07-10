import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Shop from "./Components/Shop";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link
            to="/"
            style={{ padding: "0 20px", color: "green", fontWeight: "bold" }}
          >
            Home (Public)
          </Link>
          <Link
            to="/products"
            style={{ padding: "0 20px", color: "green", fontWeight: "bold" }}
          >
            Product (Public)
          </Link>
          <Link
            to="/shop"
            style={{ padding: "0 20px", color: "green", fontWeight: "bold" }}
          >
            Shop (Public)
          </Link>
          <Link
            to="/cart"
            style={{ padding: "0 20px", color: "red", fontWeight: "bold" }}
          >
            Cart (Private)
          </Link>
          <Link
            to="/checkout"
            style={{ padding: "0 20px", color: "red", fontWeight: "bold" }}
          >
            Checkout (Private)
          </Link>
        </nav>
        <Routes>
          {/* This is Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />

          {/* This is Private Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
