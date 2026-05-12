
// import Swiper core and required modules

"use client";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import deka from "next/font/local";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import Image from 'next/image';

const myFont =  deka({
  src: './font/deka.otf',
  weight: '400',
  style: 'normal'
})

const Swiners = () => {
  return (
     <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
        autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
           <div className={`relative h-[calc(100vh-96px)] w-full ${myFont.className}`}>
      <Image
        src="/1s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className='flex justify-center items-center h-full text-[#D4AF37]'>
        <p className='text-5xl font-bold absolute'>Wear Confidence. Own the Moment.</p>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>
          <div className={`relative h-[calc(100vh-96px)] w-full ${myFont.className}`}>
      <Image
        src="/2s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>

      <div className='flex justify-center items-center h-full text-[#D4AF37]'>
        <p className='text-5xl font-bold absolute'>Dress Bold. Live Bold.</p>
      </div>
    </div>
      </SwiperSlide>
      <SwiperSlide>

          <div className={`relative h-[calc(100vh-96px)] w-full ${myFont.className}`}>
      <Image
        src="/3s.jpg"
        alt="Banner Image"
        fill
        className="object-cover"
        priority
      />
       <div className="absolute inset-0 bg-black/60"></div>

        <div className='flex justify-center items-center h-full text-[#D4AF37]'>
        <p className='text-5xl font-bold absolute'>Where Fashion Meets Confidence.</p>
      </div>
    </div>
      </SwiperSlide>
      
      ...
    </Swiper>
  );
};

export default Swiners;