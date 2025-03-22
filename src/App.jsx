import { BrowserRouter, Route, Routes } from "react-router-dom";
import { memo } from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ShastraDetails from "../src/components/ShastraProductsDetails/ShastaDetails";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/product/:id" element={<ShastraDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
};

export default memo(App);
