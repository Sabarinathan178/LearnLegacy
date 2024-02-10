import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Learn Legacy</span>
          </h1>
          <h3 className="text-neutral text-center py-2">
            {" "}
            Learning doesn't require Legacy , Start learning and
            Make your legacy
          </h3>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src="https://res.cloudinary.com/du541igfh/image/upload/v1683035791/Blog%20Portfolio%20Gilbert/Project/berthutapea.com/GilbertHutapea_qjy2gq.png"
              alt="Gilbert Hutapea"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Gilbert Hutapea"
            />
          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Leran Legacy
            </h1>
            {/* <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "A Mern-stack Developer",
                  2000,
                  "A Full-stack Developer",
                  2000,
                  "A Front-end Developer",
                  2000,
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div> */}
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              At Learn Legacy, we guide students towards a future they'll love.
              Our team is dedicated to helping you find your perfect domain
              among 9 exciting choices, including UI/UX Design, Networking, Full
              Stack Development, AI, Cybersecurity, Blockchain, Java Spring
              Boot, Business, and Mindset.
              {/* Dedicated Front-end developer. Capable to solve working problems.
              Passionate about learning & development to reach the target. Eager
              to tackle more complex problems and continue to find ways to
              maximize user efficiency. */}
            </p>
            {/* <br /> */}
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              Empower yourself by attending our interactive sessions where
              experts will delve into the intricacies of each domain. Seize the
              opportunity to shape your career path with confidence!
            </p>
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              Craft Your Legacy: Free Domain Choice Workshop (Feb 26 - Mar 05)
              Stop the career confusion. Ignite your passion. Build your future.
              {/* My next mission is how to become a Mern stack Developer. I would
              love to build some Giant Website which will shine myself. */}
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              {/* <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Gilbert Hutapea
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+62 823 6148 4992
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                berthutapea@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Karawang, Jawa Barat, Indonesia
              </h2> */}
              <a
                href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* My Skill
      <MySkill />

      {/* Education */}
      {/* <Education /> */}
    </div>
  );
};

export default About;
