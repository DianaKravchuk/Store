import "swiper/css";
import "swiper/css/pagination";
import React, { useRef } from "react";
import Banner from "./components/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { BannersData } from "./data";

const Banners: React.FC = () => {
  const swiperRef = useRef<SwiperCore | null>(null);

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  interface Banner {
    id: number;
    outlineText?: string;
    filledText: string;
    salePercent?: number;
    backgroundImage: string;
  }

  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        speed={700}
      >
        {BannersData.map((banner: Banner) => (
          <SwiperSlide
            className="w-full h-full flex items-center justify-center"
            key={banner.id}
          >
            <Banner
              outlineText={banner.outlineText}
              filledText={banner.filledText}
              salePercent={banner.salePercent}
              onNext={handleNext}
              onPrev={handlePrev}
              backgroundImage={banner.backgroundImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banners;
