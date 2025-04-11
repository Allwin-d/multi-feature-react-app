import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

// Shopping Cart imports
import Cart from "./Components/ShoppingCart/pages/cart";
import ShoppingCartHome from "./Components/ShoppingCart/pages/home";

// Recipe App imports
import RecipeAppHome from "./Components/RecipeApp/Pages/Home.jsx";
import Details from "./Components/RecipeApp/Pages/Details";
import GlobalState from "./Components/RecipeApp/Context"; // ✅ Context wrapper
import Favorites from "./Components/RecipeApp/Pages/Favorites";

// Feature Components
import Accordian from "./Components/Accordian/Accordian.jsx";
import ColorGenerator from "./Components/ColorGenerator/ColorGen.jsx";
import ImageSlider from "./Components/ImageSlider/ImageSli.jsx";
import LoadMoreProducts from "./Components/LoadMoreProducts/LoadMorePro.jsx";
import QrCodeGenerator from "./Components/QrCodeGenerator/Qrcode.jsx";
import WeatherApp from "./Components/WeatherApp/Weather.jsx";

const App = () => {
  return (
    <GlobalState>
      {" "}
      {/* ✅ Context wraps entire app */}
      <Routes>
        <Route path="/" element={<ShoppingCartHome />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/recipes" element={<RecipeAppHome />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/accordion" element={<Accordian />} />
        <Route path="/color-generator" element={<ColorGenerator />} />
        <Route path="/image-slider" element={<ImageSlider />} />
        <Route path="/load-more" element={<LoadMoreProducts />} />
        <Route path="/qr-code" element={<QrCodeGenerator />} />
        <Route path="/weather" element={<WeatherApp />} />
      </Routes>
    </GlobalState>
  );
};

export default App;
