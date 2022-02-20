import "./App.css";

import { useState } from "react";
import MainContext from "./context/MainContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Toolbar from "./components/Toolbar";
import CreateProductPage from "./Pages/CreateProductPage";
import SingleProductPage from "./Pages/SingleProductPage";
import MainPage from "./Pages/MainPage";
import CartPage from "./Pages/CartPage";
import CreateUserPage from "./Pages/CreateUserPage";
import LoginUserPage from "./Pages/LoginUserPage";

function App() {
  const [allProducts, setProducts] = useState([]);
  const [getCart, setCart] = useState([]);

  return (
    <MainContext.Provider value={{ getCart, setCart }}>
      <BrowserRouter>
        <Toolbar getCart={getCart} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage allProducts={allProducts} setProducts={setProducts} />
            }
          />
          <Route path="/createProduct" element={<CreateProductPage />} />
          <Route
            path="/product/:id"
            element={<SingleProductPage getCart={getCart} setCart={setCart} />}
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/createUser" element={<CreateUserPage />} />
          <Route path="/loginUser" element={<LoginUserPage />} />
          <Route path="/userInfo" element={<LoginUserPage />} />
        </Routes>
      </BrowserRouter>
    </MainContext.Provider>
  );
}

export default App;
