import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import img1 from "../../public/assets/home/slide1.jpg";
import img2 from "../../public/assets/home/slide2.jpg";
import img3 from "../../public/assets/home/slide3.jpg";
import img4 from "../../public/assets/home/slide4.jpg";
import img5 from "../../public/assets/home/slide5.jpg";
const Carousel2 = () => {
  return (
    <>
      <div className="mb-[100px] mt-[70px]">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={img1} alt="" />
          <p className="text-[32px] text-[#fff] ml-[70px] mt-[-50px]">SALADS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="" />
          <p className="text-[32px] text-[#fff] ml-[70px] mt-[-50px]">PIZZAS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="" />
          <p className="text-[32px] text-[#fff] ml-[70px] mt-[-50px]">SOUPS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img4} alt="" />
          <p className="text-[32px] text-[#fff] ml-[70px] mt-[-50px]">DESSERTS</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img5} alt="" />
          <p className="text-[32px] text-[#fff] ml-[70px] mt-[-50px]">SALADS</p>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
};

export default Carousel2;
