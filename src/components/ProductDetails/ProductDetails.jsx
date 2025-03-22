import  { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CircularProgress, Card, Button } from "@mui/material";
import { BiHome } from "react-icons/bi";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const date = new Date();

  const daysOfWeek = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];

  const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) throw new Error("Product not found");
        const data = await response.json();
        setProductData(data);
      } catch (err) {
        setError(err.message || "Product not found");
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  return (
    <Card className="!p-6 !my-9 bg-white !rounded-lg !shadow-md sm:!w-[70%] !w-[96%]">
      {loading && <CircularProgress />}
      {error && <p className="!text-red-500">{error}</p>}
      {productData && (
        <div>
        <img src={productData.image} alt={productData.title} className="!w-full !h-56 !object-contain !my-3" />
        <h2 className="!text-2xl !font-bold tracking-wide ! mb-2">{productData.title}</h2>
          <p className="text-gray-600">{productData.description}</p>
          <p className="!text-lg !font-semibold !mt-2">{daysOfWeek[date.getDay()]}</p>
          <p className="!text-md !font-semibold !mt-2">{`${date.getDate()} | ${monthNames[date.getUTCMonth()]} | ${date.getFullYear()}`}</p>
          <Link to='/'>
          <Button variant="contained" className="!mt-3 !bg-gray-900 !px-5"> <BiHome color="white" size={19}/> &nbsp; Go To Home</Button>
          </Link>
        </div>
      )}
    </Card>
  );
};

export default ProductDetails;
