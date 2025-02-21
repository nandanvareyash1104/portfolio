import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post("https://getform.io/f/bejrywja", data);
      toast.success("Your message has been sent");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 text-white">
      <h1 className="text-3xl font-bold text-center mb-4">Contact Me</h1>
      <p className="text-center text-gray-300">Fill out the form below to get in touch</p>
      <div className="flex flex-col items-center justify-center mt-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-slate-200 w-full max-w-lg px-6 py-6 rounded-xl shadow-lg"
        >
          <h1 className="text-xl font-semibold mb-4 text-black text-center">Send your Message</h1>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter Your Email"
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="flex flex-col mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              className="shadow rounded-lg border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Message"
              rows="4"
              {...register("msg", { required: "Message is required" })}
            />
            {errors.msg && <span className="text-red-500 text-sm">{errors.msg.message}</span>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white rounded-xl px-4 py-2 hover:bg-slate-700 transition duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
