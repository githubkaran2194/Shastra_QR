import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../../assets/HRC03865.JPG";
import img2 from "../../assets/HRC03922.JPG";
import img3 from "../../assets/HRC03915.JPG";
import img4 from "../../assets/HRC03838.JPG";

const Slider = () => {
    const images = [img1, img2, img3, img4];    

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="shadow-lg"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover rounded-md" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="!bg-gradient-to-r from-orange-900 to-orange-950 !mt-2 !p-2">
      <marquee className="text-xl text-white">Bring blessings home...</marquee>
      </div>
    </div>
  );
};

export default Slider;
