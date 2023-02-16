import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";

const MainBanner:React.FC = () => {
    SwiperCore.use([Pagination, Autoplay]);
    return (
        <div className="w-full h-[70%]">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={true}
                className="w-full h-[100%]"
            >
                <SwiperSlide>
                    <img src="/images/test1.jfif" alt="" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/test2.jfif" alt="" className="w-full h-full"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/test3.jfif" alt="" className="w-full h-full"/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default MainBanner;