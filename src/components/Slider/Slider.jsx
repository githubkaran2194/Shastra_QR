import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import img1 from "../../assets/HRC03865.JPG";
import img2 from "../../assets/HRC03922.JPG";
import img3 from "../../assets/HRC03838.JPG";

const Slider = () => {
  const images = [img1, img2, img3];

  return (
    <div className="w-full max-w-3xl !mx-auto">
      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect="fade"
        loop
        pagination={{ clickable: true }}
        className="!rounded-md"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="!w-full !h-[98%] !object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Marquee Banner */}
      <div className="bg-gradient-to-r from-orange-900 to-orange-950 !mt-2 !p-2 text-center">
        <marquee className="!text-xl text-white">Bring blessings home...</marquee>
      </div>
    </div>
  );
};

export default Slider;
