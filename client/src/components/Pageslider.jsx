import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import aboutImage from "../assets/about_image.png";

const HealthcareCarousel = () => {
  return (
    <section className="w-full h-screen bg-gray-50 overflow-hidden">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Our <span className="text-blue-600">Gallery</span>
        </h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
          A glimpse of our psychiatric and orthopedic care environment where compassion meets advanced healthcare.
        </p>
      </div>

      {/* Full-Width Carousel */}
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
        className="w-full h-[85vh]"
      >
        {[aboutImage, aboutImage, aboutImage, aboutImage].map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-blue-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center">
                  {index === 0 && "Psychiatric Consultation"}
                  {index === 1 && "Orthopedic Treatment"}
                  {index === 2 && "Rehabilitation & Recovery"}
                  {index === 3 && "Patient Support"}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HealthcareCarousel;
