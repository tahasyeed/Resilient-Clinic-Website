import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function AppointmentPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sy8qu56",   // replace with your EmailJS service ID
        "template_u66crje",  // replace with your EmailJS template ID
        form.current,
        "JqKWp8deRaZXt3EW-"    // replace with your EmailJS public key
      )
      .then(
        () => {
          alert("Appointment request sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send appointment ❌, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">
          Book Appointment
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            name="user_address"
            placeholder="Address"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="date"
            name="appointment_date"
            placeholder="Appointment Date"
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Concern"
            className="w-full border p-2 rounded"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Submit Appointment
          </button>
        </form>
      </div>
    </div>
  );
}
