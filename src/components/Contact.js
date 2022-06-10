import React, { useRef } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const Contact = () => {
  const form = useRef();

  const handleForm = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_puyhirh",
        "template_0wcejui",
        form.current,
        "3ujmuTjQcS-MztoI4"
      )
      .then(
        (result) => {
          if(result.text === "OK"){
            toast.success('Thanks for messaging us.Your message will be recorded.');
          }
        },
        (error) => {
          toast.error(error.text);
        }
      );
    event.target.reset();
  };
  return (
    <div id="contact" className="mt-24 bg-slate-900 py-12">
      <h2 className="text-xl font-bold">Contact Me</h2>
      <hr className="w-10 mt-2 mb-4 mx-auto" />
      <h2 className="text-4xl lg:text-6xl font-bold mb-16">Get In Touch</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 gap-10 items-center">
        <div>
          <h2 className="text-xl font-bold mb-3">Message Us</h2>
          <form ref={form} onSubmit={handleForm}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="input input-bordered w-full max-w-md mb-4"
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered w-full max-w-md mb-4"
            />{" "}
            <br />
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              class="input input-bordered w-full h-24 max-w-md mb-4"
            />
            <br />
            <input
              className="btn btn-outline btn-success w-full max-w-md"
              type="submit"
              value="Send"
            />
          </form>
        </div>
        <div className="p-8">
          <div className="flex ">
            <div className="mr-5 mt-2">
              <FaLocationArrow className="text-2xl"></FaLocationArrow>
            </div>
            <div className="text-left">
              <p className="font-bold text-xl mb-2">Location</p>
              <p>Gazipur District,Dhaka,Bangladesh</p>
            </div>
          </div>
          <hr className="mb-12 mt-6 w-72 lg:w-96" />

          <div className="flex ">
            <div className="mr-5 mt-2">
              <FaPhone className="text-2xl"></FaPhone>
            </div>
            <div className="text-left">
              <p className="font-bold text-xl">Phone</p>
              <p>+8801637014306</p>
            </div>
          </div>
          <hr className="mb-12 mt-6 w-72 lg:w-96" />

          <div className="flex ">
            <div className="mr-5 mt-2">
              <FaMailBulk className="text-2xl"></FaMailBulk>
            </div>
            <div className="text-left">
              <p className="font-bold text-xl">Email</p>
              <p>arif.hossain210505@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
