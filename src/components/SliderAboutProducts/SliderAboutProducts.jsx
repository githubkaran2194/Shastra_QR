import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import slider1 from "../../assets/Slider1.png";
import slider2 from "../../assets/Slider2.png";
import slider3 from "../../assets/Slider3.png";
import slider4 from "../../assets/Slider4.png";
import slider5 from "../../assets/Slider5.png";

import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';

const SliderAboutProducts = () => {
  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
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
            <InnerImageZoom
              src={img}
              zoomSrc={img}
              alt={`Slide ${index + 1}`}
              zoomType="hover"
              zoomScale={1.5}
              zoomLensStyle={{ background: "rgba(255,255,255,0.2)" }}
              className="!rounded-md !mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderAboutProducts;
