import SectionTitle from "./sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
const Testimonial = () => {
  const [ratings, setRatings] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setRatings(data));
  }, []);
  return (
    <div className="my-[100px]">
      <SectionTitle
        subHeading="---What Our Clients Say---"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {ratings.map((item) => (
            <SwiperSlide key={item._id}>
              <Rating className="mx-auto mb-2" style={{ maxWidth: 180 }} value={item.rating} readOnly />
              <p className="mb-2 text-center text-[#CD9003] text-[32px]">{item.name}</p>
              <p className="text-center text-[20px] ">{item.details}</p>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
