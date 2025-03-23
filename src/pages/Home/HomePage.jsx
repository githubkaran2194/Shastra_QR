import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShastraForm from "../../components/MainShatraForm/ShastraForm";
import SliderComponent from "../../components/Slider/Slider";
import SutraData from "../../data/SutraData";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent page reload
    const query = searchQuery.trim().toUpperCase();

    const result = Array.isArray(SutraData)
      ? SutraData.find((item) => item.id === query)
      : SutraData[query];

    if (result) {
      setError("");
      navigate(`/product/${query}`); // Navigate to product details page
    } else {
      setError("Please enter a valid product id");
      toast.error('Please enter a valid product id')
    }
  };

  return (
    <div className="!mx-auto !max-w-[98%] !my-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="order-2 sm:order-1">
          <SliderComponent />
        </div>
        <div className="order-1 sm:order-2">
          <ShastraForm
            handleSearch={handleSearch}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            error={error}
          />
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default HomePage; 
