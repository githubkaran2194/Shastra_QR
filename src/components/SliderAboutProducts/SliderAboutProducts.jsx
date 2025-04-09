import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Autoplay,
  EffectFade,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import slider1 from "../../assets/Slider1.png";
import slider2 from "../../assets/Slider2.png";
import slider3 from "../../assets/Slider3.png";
import slider4 from "../../assets/Slider4.png";
import slider5 from "../../assets/Slider5.png";

import { useState } from "react";

const SliderAboutProducts = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="!w-full !flex !flex-col !items-center !text-gray-700 !text-xl !mb-6 !overflow-hidden !rounded-md !mx-auto">
      {/* Main Swiper */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade, FreeMode, Thumbs]}
        spaceBetween={30}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="!w-full sm:h-[300px] md:h-[400px] !rounded-md"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="!w-full !object-cover !rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="md:!w-full max-w-[99%] !mt-4"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="!w-full !h-20 !object-cover !rounded-md !cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderAboutProducts;
