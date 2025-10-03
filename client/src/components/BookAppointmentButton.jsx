import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BookAppointmentButton() {
  const [hoverState, setHoverState] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row gap-5 w-full mt-2">
      <Link
        to="/appointment"
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
        className="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-full flex items-center justify-center gap-3 px-8 py-4 text-white font-medium text-base transition-all duration-500 hover:shadow-2xl"
      >
        <span className="relative z-10 flex items-center gap-2">
          Book Appointment
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              hoverState ? "translate-x-1" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      </Link>
    </div>
  );
}
