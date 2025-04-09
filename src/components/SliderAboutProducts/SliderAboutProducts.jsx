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
      {isZoomed && (
        <div
          className="!fixed !inset-0 !bg-gray-200 !bg-opacity-0 !flex !justify-center !items-center !z-1000"
          onClick={closeZoom}
        >
          <img
            src={zoomedImg}
            alt="Zoomed"
            className="!max-w-full !max-h-full !object-contain !rounded-lg"
          />
        </div>
      )}
    </>
  );
};

export default SliderAboutProducts;
