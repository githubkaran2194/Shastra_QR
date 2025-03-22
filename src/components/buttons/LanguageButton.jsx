/* eslint-disable react/prop-types */
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa";

const NavButton = ({ setSelectedLanguage, selectedLanguage }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    handleClose();
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={<FaLanguage />}
        className="!font-semibold bg-btn"
        onClick={handleMenu}
      >
        {selectedLanguage}
      </Button>

      {/* Dropdown Menu */}
      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange("English")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("Hindi")}>Hindi</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("Marathi")}>Marathi</MenuItem>
      </Menu>
    </>
  );
};

export default NavButton;
