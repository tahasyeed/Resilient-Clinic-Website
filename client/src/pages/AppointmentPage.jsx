import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function AppointmentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_sy8qu56",   // replace with EmailJS Service ID
        "template_ppbq6k4",  // replace with EmailJS Template ID
        formData,
        "JqKWp8deRaZXt3EW-"    // replace with EmailJS Public Key
      )
      .then(
        () => {
          alert("Appointment request sent successfully!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            message: "",
          });
        },
        () => {
          alert("Failed to send request. Please try again.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Book Appointment
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded"
          />
          <textarea
            name="message"
            placeholder="Message (optional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />

          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
