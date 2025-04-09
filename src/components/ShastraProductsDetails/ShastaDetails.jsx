import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import SutraData from "../../data/SutraData";
import { BiArrowBack } from "react-icons/bi";
import SliderAboutProducts from "../SliderAboutProducts/SliderAboutProducts";

const SutraDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Check if SutraData is an array or an object
  const sutra = Array.isArray(SutraData)
    ? SutraData.find((item) => item.id === id) // Ensure `id` matches the structure
    : SutraData[id];

  return (
    <div className="!flex !justify-center !items-center !min-h-screen !bg-gradient-to-br !from-gray-100 !to-gray-300 !p-6">
      <div className="!bg-white !shadow-xl !rounded-lg !p-8 !max-w-6xl !w-full !transform !hover:scale-105 !transition !duration-500">
        {/* Header Section */}
        <div className="!items-center !justify-between !mb-6">
          <h1 className="!text-3xl !font-extrabold !text-gray-800 !text-center">
            {sutra ? sutra.name : "Product Not Found"}
          </h1>
          
        </div>

        {sutra ? (
          <>
            {/* Product Details */}
            <div className="!bg-gray-200 !p-4 !rounded-lg !mb-6">
              <p className="!text-lg !font-semibold !text-gray-700">
              Product Consecration Date: <span className="!text-red-500">22 March 2025</span>
              </p>
            </div>

            {/* Image Slider */}
           <SliderAboutProducts/>

            {/* Description */}
            <p className="!text-lg !text-gray-600 !leading-relaxed !mb-6">
              {sutra.description}
            </p>

            {/* Method of Use */}
            <div className="!bg-orange-100 !p-3 !rounded-lg !shadow-md !mb-6">
              <h2 className="!text-xl !font-bold !text-orange-800 !mb-4">
                Method of Use:
              </h2>
              <ul className="!list-disc !list-inside !text-gray-700 !text-lg">
                <li>
                  Men should wear it on the <strong>right wrist</strong>, while
                  women should wear it on the <strong>left wrist</strong>.
                </li>
                <li>
                  Wrap the thread <strong>three times</strong> around the wrist
                  and secure it.
                </li>
                <li>
                  Wear it continuously for at least <strong>48 days</strong> to
                  experience its full benefits.
                </li>
                <li>
                  To remove, either <strong>untie</strong> the thread or use{" "}
                  <strong>heat</strong> to cut it.
                </li>
                <li>
                  For disposal, you may <strong>bury</strong> it,{" "}
                  <strong>burn</strong> it, or respectfully discard it into a{" "}
                  <strong>flowing river</strong>.
                </li>
              </ul>
            </div>

            {/* Material and Production */}
            <div className="!bg-gray-100 !p-3 !rounded-lg !shadow-md">
              <p className="!font-semibold !text-gray-800 !text-lg">
                <span className="!text-orange-700">Material:</span> 100% Cotton
              </p>
              <p className="!font-semibold !text-gray-800 !text-lg !mt-2">
                <span className="!text-orange-700">Production:</span> Handmade
                with devotion and precision.
              </p>
              <div className="!flex !justify-between !items-center">
            {/* <p className="!font-semibold !text-gray-800 !text-lg">To view the consecration process <a className="text-xl font-bold text-blue-900 underline" href="">click here.</a></p> */}
            <span></span>
              <Button
            variant="contained"
            color="secondary"
            startIcon={<BiArrowBack />}
            className="!bg-orange-600 !text-white !px-4 !py-2 !rounded-md !my-5"
            onClick={() => {
              if (sutra) {
                navigate(-1); // Navigate back only if sutra exists
              }
            }}
          >
            Back
          </Button>
          
          </div>
            </div>
          </>
        ) : (
          <div className="!text-center !text-red-600 !text-xl !my-3 !py-2">
            No details found for this Shastra Product.
          </div>
        )}
      </div>
    </div>
  );
};

export default SutraDetails;
