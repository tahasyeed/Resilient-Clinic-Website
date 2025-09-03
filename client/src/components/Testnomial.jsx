// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// // Dummy testimonials data
// const testimonials = [
//   {
//     id: 1,
//     name: "Nesri Mratin",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     feedback:
//       "The doctors here truly listen and care. From the moment I walked in, I felt supported and comfortable. The treatment plan was explained clearly, and I’m already seeing improvements.!",
//   },
//   {
//     id: 2,
//     name: "Jhon Gaurg",
//     image: "https://randomuser.me/api/portraits/women/44.jpg",
//     feedback:
//       "Excellent service and compassionate staff. The clinic maintains a very professional yet friendly environment, which made me feel at ease throughout my visits.",
//   },
//   {
//     id: 3,
//     name: "Wiky Moty",
//     image: "https://randomuser.me/api/portraits/men/32.jpg",
//     feedback:
//       "I’m very grateful for the personalized attention I received. The team went above and beyond to make sure my recovery was smooth and stress-free.!",
//   },
//   {
//     id: 4,
//     name: "Jeky Jodh",
//     image: "https://randomuser.me/api/portraits/men/76.jpg",
//     feedback:
//       "A wonderful experience from start to finish. The appointments were timely, the facilities are well-maintained, and most importantly, I felt heard and respected as a patient.!",
//   },
// ];

// const Testimonials = () => {
//   return (
//     <section
//       className="py-16 bg-gray-50 overflow-hidden"
//       id="reviews"
//     >
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h4 className="text-green-600 font-medium">Testimonial</h4>
//           <h1 className="text-3xl md:text-4xl font-bold mt-3">
//             Patient's <span className="text-blue-600">Feedback</span>
//           </h1>
//           <p className="mt-3 text-gray-600">
//             This review shows that incorporating patient feedback of their
//             experience into research on quality patient-centred care.
//           </p>
//         </div>

//         {/* Swiper */}
//         <Swiper
//           modules={[Pagination]}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           slidesPerView={1}
//           loop
//           className="pb-10"
//         >
//           {testimonials.map((testi) => (
//             <SwiperSlide key={testi.id}>
//               <div className="bg-white shadow-md rounded-2xl p-6 text-center">
//                 <img
//                   src={testi.image}
//                   alt={testi.name}
//                   className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-blue-100 shadow-sm"
//                 />
//                 <h4 className="mt-4 mb-2 text-xl font-semibold text-blue-600">
//                   {testi.name}
//                 </h4>

//                 {/* Stars ⭐ */}
//                 <div className="flex justify-center mb-3">
//                   {[...Array(5)].map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-xl">
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 <p className="text-gray-600">{testi.feedback}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Dummy testimonials data
const testimonials = [
  {
    id: 1,
    name: "Nesri Mratin",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The doctors here truly listen and care. From the moment I walked in, I felt supported and comfortable. The treatment plan was explained clearly, and I’m already seeing improvements!",
  },
  {
    id: 2,
    name: "Jhon Gaurg",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "Excellent service and compassionate staff. The clinic maintains a very professional yet friendly environment, which made me feel at ease throughout my visits.",
  },
  {
    id: 3,
    name: "Wiky Moty",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "I’m very grateful for the personalized attention I received. The team went above and beyond to make sure my recovery was smooth and stress-free!",
  },
  {
    id: 4,
    name: "Jeky Jodh",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    feedback:
      "A wonderful experience from start to finish. The appointments were timely, the facilities are well-maintained, and most importantly, I felt heard and respected as a patient!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden" id="reviews">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h4 className="text-green-600 font-medium">Testimonial</h4>
          <h1 className="text-3xl md:text-4xl font-bold mt-3">
            Patient's <span className="text-blue-600">Feedback</span>
          </h1>
          <p className="mt-3 text-gray-600">
            This review shows that incorporating patient feedback of their
            experience into research on quality patient-centred care.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
            el: ".custom-pagination", // use custom wrapper
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((testi) => (
            <SwiperSlide key={testi.id} className="h-full">
              <div className="bg-white shadow-md rounded-2xl p-6 text-center h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <img
                    src={testi.image}
                    alt={testi.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-blue-100 shadow-sm"
                  />
                  <h4 className="mt-4 mb-2 text-xl font-semibold text-blue-600">
                    {testi.name}
                  </h4>

                  {/* Stars ⭐ */}
                  <div className="flex justify-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feedback */}
                <p className="text-gray-600 mt-3">{testi.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination dots with top margin */}
        <div className="custom-pagination mt-10 flex justify-center" />
      </div>
    </section>
  );
};

export default Testimonials;
