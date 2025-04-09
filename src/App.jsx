import { BrowserRouter, Route, Routes } from "react-router-dom";
import { memo } from "react";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ShastraDetails from "./components/ShastraProductsDetails/ShastaDetails";
import TermsAndConditions from "./pages/TermAndConditions/TermAndConditions";
import AboutUs from "./pages/AboutUS/AboutUS";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/product/:id" element={<ShastraDetails/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
    </>
  );
};

export default memo(App);
