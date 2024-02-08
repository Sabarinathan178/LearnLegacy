import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, Testimonial, Information, Service } from "../../components";
import Register from "../Register";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      {/* <Service /> */}
      {/* <Project /> */}
      <Testimonial />
      <Information />
      {/* <Register /> */}
      <Contact />
    </div>
  );
};

export default Home;
