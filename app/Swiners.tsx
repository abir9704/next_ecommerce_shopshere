
// import Swiper core and required modules

"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Swiners = () => {
  return (
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
           <div className="relative h-[calc(100vh-96px)] w-full">
      <Image
        src="/1s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
    </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className="relative h-[calc(100vh-96px)] w-full">
      <Image
        src="/2s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
    </div>
      </SwiperSlide>
      <SwiperSlide>

          <div className="relative h-[calc(100vh-96px)] w-full">
      <Image
        src="/3s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
    </div>
      </SwiperSlide>
      
      ...
    </Swiper>
  );
};

export default Swiners;