import React from 'react';
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='container banner__swiper-all '> 
            <Swiper 
        loop={true} 
        navigation={true} 
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]} 
        className="banner__swiper">
        <SwiperSlide className='banner__item-1'>
          <div className="banner__item-parag">
          <h1>Découvrez le secret des branches </h1>
          <h2>Save up to 50% off on your first order</h2>
        
          </div>
        </SwiperSlide>
        <SwiperSlide className='banner__item-2'>
        <div className="banner__item-parag">
          <h1>Cerisier pour une vie plus épanouie !</h1>
          <h2>Save up to 50% off on your first order</h2>
         
          </div>
        </SwiperSlide>
        <SwiperSlide className='banner__item-3'>
        <div className="banner__item-parag">
          <h1>Fresh Vegetables Big discount</h1>
          <h2>Save up to 50% off on your first order</h2>
         
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    );
}

export default Banner;
