import React from "react";
import "./Testimonials.css";
import AVTR1 from "../../assets/avatar1.png";
import AVTR2 from "../../assets/avatar1.png";
import AVTR3 from "../../assets/avatar1.png";
// import AVTR4 from "../../assets/avatar1.png";

// import Swiper core and required modules
import { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: AVTR1,
    name: "Maneth Pathirana",
    review:
      "I’m impressed by your ability to iterate on code based on the feedback I and your teammates give you. My only suggestion for the future is that you review our team’s technical style guide, as I have noticed that your code is sometimes difficult to read or follow. In the future, please don’t hesitate to ask for more feedback. I’m happy to work with you on this!",
  },
  {
    avatar: AVTR2,
    name: "Rayna Daniels",
    review:
      "You are the go-to expert on our team, and I appreciate how strategic you are when making decisions. One piece of constructive feedback I have for you is that you spent a lot of time this past quarter chasing technology fads. I think it’s great that you can keep up-to-date on industry trends, though, so let’s work together to come up with a plan to keep you on task but still able to bring your innovation to the table.",
  },
  {
    avatar: AVTR3,
    name: "Nilan Ganhewage",
    review:
      "This year, I would love to see you participate in initiatives outside of your main area of responsibility. Your product knowledge and natural leadership skills will make you an asset in other areas of the company!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonials;
