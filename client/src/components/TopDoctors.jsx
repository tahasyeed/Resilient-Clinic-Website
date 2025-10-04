// import React from 'react';
// import { motion } from 'framer-motion';

// const TopDoctors = () => {
//   // Sample doctors data (self-contained, no external context)
//   const doctors = [
//     {
//       _id: 1,
//       name: "Dr. Ayesha Khan",
//       image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhTf0YoTtbw5D-A4p72k3Y4xIXjgTbH8ECA&s",
//       degree: "MBBS, MD",
//       experience: 12,
//       available: true,
//     },
//     {
//       _id: 2,
//       name: "Dr. Rohit Sharma",
//       image: "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg",
//       degree: "BDS, MDS",
//       experience: 8,
//       available: true,
//     },
//     {
//       _id: 3,
//       name: "Dr. Priya Mehta",
//     image:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9waG90b2dyYXBoeV9vZl9hbl9zb3V0aF9pbmRpYW5fd29tZW5fYXNfYV9kb2N0b19kMzAxMDM3Zi03MDUzLTQxNDAtYmYyZS1lZDFlYWE0YTM3NDRfMS5qcGc.jpg",
//       degree: "MBBS, MS",
//       experience: 15,
//       available: true,
//     },
//     {
//       _id: 4,
//       name: "Dr. Arjun Patel",
//       image: "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
//       degree: "MBBS, DM",
//       experience: 10,
//       available: true,
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
//   };

  





//         {/* Doctors Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
//         >
//           {doctors.map((doctor) => (
//             <motion.div
//               key={doctor._id}
//               variants={itemVariants}
//               whileHover={{ y: -5 }}
//               className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
//             >
//               {/* Image with availability */}
//               <div className="relative h-60 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
//                 <img
//                   src={doctor.image}
//                   alt={doctor.name}
//                   className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
//                   <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
//                   <span className="text-xs font-medium">
//                     {doctor.available ? 'Available' : 'Unavailable'}
//                   </span>
//                 </div>
//               </div>

//               {/* Info */}
//               <div className="p-6 text-center">
//                 <h3 className="text-lg font-semibold text-gray-900 mb-2">{doctor.name}</h3>
//                 <p className="text-gray-600 text-sm">{doctor.degree}</p>
//                 <p className="text-blue-600 font-medium text-sm mt-1">
//                   {doctor.experience} Years Experience
//                 </p>
//               </div>
//             </motion.div>
//           ))}
          
//         </motion.div>

//       </div>
//     </section>
//   );
// };

// export default TopDoctors;










import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import shaziaImg from '../assets/shazia.jpg';
import irshadImg from '../assets/irshad.png';




const TopDoctors = () => {
  const navigate = useNavigate();

  // Sample doctors data
  const doctors = [
    {
      _id: 1,
      name: "Dr. Shazia Kouser",
      image: shaziaImg,
      degree: "MBBS, MD-Psychaitry",
      experience: 22,
      available: true,
    },
    {
      _id: 2,
      name: "Dr. Irshad Tabasum",
      image: irshadImg,
      degree: "MBBS, MS-Orthopaedics",
      experience: 25,
      available: true,
    },
    {
      _id: 3,
      name: "Shabir Ahmad",
      image:"",
      degree: "Pharmacy",
      experience: 5,
      available: true,
    },
    {
      _id: 4,
      name: "Taha Syeed",
      image: "https://peertaha.netlify.app/src/webp/reduce.jpg",
      degree: "Diploma, B-Tech-Computer Engineering",
      experience: 2,
      available: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
      
        
      <h1 className="text-4xl font-bold text-center mb-6">
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
    Our Elite Team
  </span>
        </h1>
        
        <p className="text-center text-gray-600 mt-2 mb-6">
  Connect with top medical specialists for expert care anytime, anywhere.
</p>



        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor._id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image with availability */}
              <div className="relative h-60 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-48 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${doctor.available ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  <span className="text-xs font-medium">
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 text-sm">{doctor.degree}</p>
                <p className="text-blue-600 font-medium text-sm mt-1">
                  {doctor.experience} Years Experience
                </p>

                {/* Button only for first 2 cards */}
                {index < 2 && (
                  <button
                  onClick={() => {
                    navigate(`/appointment/`);
                    window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top
                  }}
                    
                    className="mt-4 w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-2 rounded-lg hover:opacity-90 transition"
                  >
                    Book Appointment
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TopDoctors;
