import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../../assets/Slider1.png";
import slider2 from '../../assets/Slider2.png';
import slider3 from '../../assets/Slider3.png';
import slider4 from '../../assets/Slider4.png';
import slider5 from '../../assets/Slider5.png';
import { Dialog } from '@mui/material';

const SliderAboutProducts = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomedImg, setZoomedImg] = useState(null);

  const handleImageClick = (img) => {
    setZoomedImg(img);
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setZoomedImg(null);
  };

  return (
    <>
      <div className="!w-full !flex !justify-center !items-center !text-gray-700 !text-xl !mb-6 !overflow-hidden !rounded-md !mx-auto">
        <Swiper
          modules={[Pagination, Autoplay, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          effect="fade"
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="!rounded-md sm:!h-[480px] !mx-auto"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="!w-[98%] !object-cover !rounded-md !mx-auto !cursor-zoom-in"
                onClick={() => handleImageClick(img)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Zoom Modal */}
      <Dialog onClose={closeZoom} open={isZoomed}>
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative p-2 bg-white rounded-md"
        >
          {/* Close Button */}
          <button
            onClick={closeZoom}
            className="absolute top-2 !right-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full shadow !p-1 !z-10"
          >
            ✕
          </button>
          <img
            src={zoomedImg}
            alt={`Zoomed Slide ${images.indexOf(zoomedImg) + 1}`}
            className="!max-w-full !max-h-[80vh] !object-contain !rounded-lg"
          />
        </div>
      </Dialog>
    </>
  );
};

export default SliderAboutProducts;
