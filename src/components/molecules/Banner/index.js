import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { SecondaryBtn } from "../../../components";
import homeimg from "../../../assets/groupedits2.jpg";
// import groupimg from "../../../assets/groupedit.jpg";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const RegisterButtonClick = () => {
    // Navigate to the desired URL
    window.location.href = "/register"; // Replace '/your-url' with the actual URL you want to navigate to
  };
  return (
    // <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between mt-8">
    <div
      className={`parent relative flex flex-col-reverse lg:flex-row items-center justify-between ${
        window.innerWidth > 770 ? "bg-eduBg min-h-[100vh]" : "mt-4"
      }`}
    >
      {window.innerWidth > 770 && (
        <div className="absolute inset-0 bg-black opacity-50"></div>
      )}
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className={`${window.innerWidth < 770 ? "-mt-20 px-2.5" : "-ml-20"}`}
      >
        <h2 className="text-neutral-100 text-xl font-semibold translate-y-[-90%] sm:translate-y-[-0%] mt-40 ">
          Hello, We are
        </h2>
        <h1
          className={`text-white text-4xl font-bold mb-0 translate-y-[-50%] sm:translate-y-[-0%]
          }`}
        >
          Learn Legacy
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "We do Artificial Intelligence",
              2500,
              "We do Full-stack Dev",
              2500,
              "We do UI/UX Design",
              2500,
              "We do BlockChain",
              2500,
              "We do CyberSecurity",
              2500,
              "We do Networking",
              2500,
              "We do Business Mindset",
              2500,
              "We do Java SpringBoot",
              2500,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        {/* <p className="text-neutral-400 max-w-xl  font-medium translate-y-[-20%] sm:translate-y-[-0%]">
          At Learn Legacy, we guide students towards a future they'll love. Our
          team is dedicated to helping you find your perfect domain among 9
          exciting choices, including UI/UX Design, Networking, Full Stack
          Development, AI, Cybersecurity, Blockchain, Java Spring Boot, Business
          and Mindset.
        </p> */}
        <p className="text-white  font-bold max-w-xl font-medium translate-y-[-20%] ">
          At Learn Legacy, we guide students towards a future they'll love. Our
          team is dedicated to helping you find your perfect domain among 9
          exciting choices, including UI/UX Design, Networking, Full Stack
          Development, AI, Cybersecurity, Blockchain, Java Spring Boot, Business
          and Mindset.
        </p>

        {/* <span className="text-primary font-bold">
          Free Online Workshop: <br /> Feb 26 - Mar 5, 5 PM to 7 PM.
        </span> */}
        <div className="relative p-4 -mt-2">
          <div className="absolute inset-0 bg-gray-900 opacity-30 "></div>
          <span
            className={`text-neutral-400  font-bold relative z-10 ${
              window.innerWidth > 770 ? "text-2xl" : "text-4lg "
            } `}
          >
            Free Online Workshop <br /> Feb 26 - Mar 5, 5 PM to 7:30 PM.
          </span>
          <button className="primary-button mt-2 text-sm">
            <span onClick={RegisterButtonClick}>Register Now</span>
          </button>
        </div>

        {/* <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%] mt-14"> */}
        {/* <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%] flex flex-col"> */}
        {/* <p className="text-neutral max-w-xl mb-1  font-medium translate-y-[-20%] sm:translate-y-[-0%] ">
              Ready to Shape Your Future?
            </p> */}

        {/* </div> */}
        {/* </div> */}
      </motion.div>
      {window.innerWidth > 770 ? (
        ""
      ) : (
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-center mt-10 min-h-2 px-2"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            height="100%"
            width="100%"
            src={homeimg}
            alt=""
            className="hover:border-orange-400 rounded-xl hover:border-8 transition-all duration-500 ease-in-out"
          />
        </motion.div>
      )}
    </div>
  );
};

export default Banner;
