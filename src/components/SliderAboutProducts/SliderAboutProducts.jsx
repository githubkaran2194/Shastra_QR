// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slider1 from "../../assets/Slider1.png";
import slider2 from '../../assets/Slider2.png';
import slider3 from '../../assets/Slider3.png';
import slider4 from '../../assets/Slider4.png';
import slider5 from '../../assets/Slider5.png';

const images = [slider1, slider2, slider3, slider4, slider5]

const SliderAboutProducts = () => {
  return (
    <div className="!w-full sm:!h-[400px] !flex !justify-center !items-center !text-gray-700 !text-xl !mb-6  overflow-hidden !rounded-md">
    <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={30}
    slidesPerView={1}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2500, disableOnInteraction: false }}
    loop={true}
    className="!shadow-lg !rounded-md"
  >
    {images.map((img, index) => (
      <SwiperSlide key={index}>
        <img src={img} alt={`Slide ${index + 1}`} className="w-full !object-cover !rounded-md" />
      </SwiperSlide>
    ))}
  </Swiper>
  </div>
  )
}

export default SliderAboutProducts