import React from 'react';
import SwiperCore, {  Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import 'swiper/modules/effect-coverflow/effect-coverflow.min.css';

import 'swiper/swiper.scss';

import './swiper.scss'

SwiperCore.use([EffectCoverflow,Pagination]);


const CSwiper = () => {

    return (
        <div className='swiper_wrapper'>
            <div className='swiper'>

                <Swiper 
                    slidesPerView={4} 
                    spaceBetween={10}
                    effect={'coverflow'} 
                    grabCursor={false} 
                    centeredSlides={true} 
                    loop
                    coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 300,
                        "modifier": 1,
                        "slideShadows": true
                    }} 
                    pagination={{type: 'custom'}} 
                    className="mySwiper"
                    breakpoints={{
                        "300": {
                        "slidesPerView": 2,
                        "spaceBetween": 10
                        },
                        "600": {
                        "slidesPerView": 4,
                        "spaceBetween": 4
                        },
                        "992px": {
                        "slidesPerView": 5,
                        "spaceBetween": 5
                        },
                        "1200": {
                        "slidesPerView": 5,
                        "spaceBetween": 10
                        },
                        "1800": {
                        "slidesPerView": 6,
                        "spaceBetween": 40
                        }
                    }} 
                >
                    <SwiperSlide><div className='left_component swiper_comp'></div></SwiperSlide>
                    <SwiperSlide><div className='right_component swiper_comp'></div></SwiperSlide>
                    <SwiperSlide><div className='bottom_component swiper_comp'></div></SwiperSlide>
                    <SwiperSlide><div className='top_component swiper_comp'></div></SwiperSlide>
                </Swiper>
            </div>
            
            //Todo? Burada Yeni swiperlar eklenecek

        </div>
    );
}     

export default CSwiper;
