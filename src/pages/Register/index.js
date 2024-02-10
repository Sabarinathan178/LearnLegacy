import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { MdSend } from "react-icons/md";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../../hooks/useAnimation";
import { BottomLine } from "../../components";

const Register = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form.current);

    // Convert form data to JSON
    const data = {};
    formData.forEach((value, key) => {
      if (key === "age") {
        data[key] = parseInt(value); // Convert age to number
      } else if (key === "domain") {
        if (!data[key]) {
          data[key] = []; // Initialize domain array
        }
        data[key].push(value); // Push domain value to array
      } else {
        data[key] = value;
      }
    });

    try {
      // Send POST request
      const response = await axios.post(
        "https://learn-legacy.onrender.com/send-message",
        data
      );
      console.log(response.data);

      // Display success message
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your Message has been sent",
        showConfirmButton: false,
        timer: 1500,
      });

      // Navigate to home page after successful submission
      navigate("/");
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }

    // Reset form after submission
    form.current.reset();
  };

  return (
    <div className="parent py-24 mt-4">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-neutral text-center">
          Make Your Decision In Right Way
        </h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Free <span className="text-primary">Registration</span>
        </h1>
        <BottomLine />
      </motion.div>
      <div className="grid grid-cols-1 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">
            Fill out the form carefully for registration
          </h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                className="input-field"
                type="text"
                name="phone"
                id="phone"
                placeholder="Mobile Number"
                required
              />
              <input
                className="input-field"
                type="number"
                name="age"
                id="age"
                placeholder="Age"
                required
              />
              <input
                className="input-field"
                type="text"
                name="college"
                id="college"
                placeholder="College"
                required
              />
              <input
                className="input-field"
                type="text"
                name="gender"
                id="gender"
                placeholder="Gender"
                required
              />
              <input
                className="input-field"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
              />
              <input
                className="input-field"
                type="text"
                name="city"
                id="city"
                placeholder="City"
                required
              />
            </div>
            <div className="flex flex-col space-y-2 mt-2">
              <span className="text-sm">Select Domains:</span>
              <label className="inline-flex items-center text-sm">
                <input
                  type="checkbox"
                  name="domain"
                  value="Web Development"
                  className="form-checkbox h-4 w-4 text-primary"
                />
                <span className="ml-2">Web Development</span>
              </label>
              {/* Additional checkboxes for other domains */}
            </div>
            <button type="submit" className="primary-button mt-4">
              <span>Register</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
