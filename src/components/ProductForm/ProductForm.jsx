import { useState } from "react";
import { Button, TextField, Alert, CircularProgress, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const ProductForm = () => {
  // State variables
  const [code, setCode] = useState(""); // Stores the user input (Product ID)
  const [loading, setLoading] = useState(false); // Indicates loading state during API call
  const [error, setError] = useState(null); // Stores validation errors or API errors
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle input change
  const handleChange = (e) => {
    let inputValue = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""); // Convert to uppercase & remove invalid characters

    let letters = inputValue.slice(0, 2).replace(/[^A-Z]/g, ""); // Extract first 2 letters (A-Z)
    let numbers = inputValue.slice(2, 4).replace(/[^0-9]/g, ""); // Extract next 2 numbers (0-9)

    let formattedCode = `${letters} ${numbers}`.trim(); // Format as "SA 25"
    setCode(formattedCode);
  };

  // Function to fetch product details
  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`https://api.example.com/products/${productId}`); // Replace with actual API
      return response.data; // Return product data
    } catch (error) {
      throw new Error("Product not found or server error.", error);
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Validation: Ensure format matches "SA 25" (2 letters + space + 2 numbers)
    if (!/^[A-Z]{2} [0-9]{2}$/.test(code)) {
      setError("Invalid format! Use SA 25.");
      return;
    }

    setError(null); // Clear previous errors
    setLoading(true); // Show loading state

    const productId = code.replace(" ", ""); // Remove space for API request

    try {
      const productData = await fetchProductDetails(productId); // Fetch product details
      navigate(`/product/${productId}`, { state: { product: productData } }); // Navigate with product data
    } catch (error) {
      setError("Product not found", error); // Set error message
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <Card className="!rounded-lg !bg-orange-50 shadow-md !h-full !py-9 !px-3 flex flex-col justify-center">
      {/* Header Section */}
      <div>
        <h1 className="!text-5xl md:!text-7xl !font-extrabold text-center text-gradient">
          Welcome to <strong className="main-text-color text-[53px] md:text-[68px] uppercase">Shastra Life</strong>
        </h1>
        <p className="!my-3 text-lg md:text-xl text-orange-400 text-center">
          Experience the Divine Energy with our Temple-Consecrated Offerings
        </p>
      </div>

      {/* Input Heading */}
      <h2 className="text-3xl font-bold text-center !mb-0">Enter Product ID and Get Details.</h2>

      {/* Form Section */}
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Product ID (SA 25)"
          value={code}
          className="!my-7"
          onChange={handleChange}
          variant="standard"
          inputProps={{ maxLength: 5 }} 
          sx={{
            "& .MuiInputBase-root": {
              fontSize: "18px",
              color: "black",
            },
            "& .MuiInputBase-input": {
              textAlign: "center",
              letterSpacing: "5px",
              fontSize: "22px",
              border: "none",
            },
            "&.MuiInputLabel-root": {
              fontSize: "28px",
              fontWeight: "bold",
            },
          }}
        />

        {/* Error Message */}
        {error && <Alert severity="error" className="w-full">{error}</Alert>}

        {/* Submit Button */}
        <Button
          variant="contained"
          fullWidth
          type="submit"
          className={`!bg-gradient-to-r !from-orange-900 !to-orange-950
            !text-white !tracking-wider !font-bold !py-2 !mt-2 !rounded-md !shadow-md 
            ${loading ? "opacity-50 !cursor-not-allowed" : ""}`}
          disabled={loading}
        >
          {/* Show loading spinner if request is in progress */}
          {loading ? <CircularProgress size={24} className="text-black" /> : "Submit"}
        </Button>
      </form>
    </Card>
  );
};

export default ProductForm;
