// import React from 'react'
// import { useState } from "react";


import { Link } from "react-router-dom";
import GoogleTranslate from "../GoogleTranslate/GoogleTranslate";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <header className="!shadow-md !bg-gradient-to-r from-orange-900 to-orange-950">
      <div className="flex justify-between items-center sm:!px-8 !px-2 !py-6 l mx-auto">
        {/* Logo / Branding */}
        <div>
          <Link
            to="/"
            className="text-white md:!text-4xl text-2xl !font-extrabold !tracking-wide border-b-2 border-b-orange-300"
          >
            ShastraLife
          </Link>
        </div>

        {/* Language Selection Dropdown */}
        <div>
        <GoogleTranslate/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
