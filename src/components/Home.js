import React from "react";
import About from "./About";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const Home = () => {
  return (
    <div id="home">
      <div class="hero min-h-screen pb-12 lg:pb-2 bg-base-200">
        <div class="hero-content text-left flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/3 lg:mr-20">
            <img
              src="https://i.ibb.co/5GVcySg/My-project-5.png"
              class="max-w-xs lg:max-w-md rounded-lg"
              alt="arif"
            />
          </div>
          <div className="mt-10 lg:mr-36 w-full lg:w-1/2">
            <h1 class="text-xl lg:text-2xl font-bold">Hello! I'm</h1>
            <h1 class="text-4xl lg:text-7xl font-bold">Arif Hossain</h1>
            <p class="py-6">
              Front End Web Developer | React Developer | Programmer
            </p>
            <div className="flex">
              <button class="btn btn-accent rounded-3xl mr-3">Hire Me</button>
              <a
                href="https://drive.google.com/file/d/1RbH0SI5jiBh5kunikeh0GWFEGkn64fG5/view?usp=sharing"
                target="_blank"
              >
                <button class="btn btn-outline rounded-3xl text-white">
                  Download Resume
                </button>
              </a>
            </div>
            <div className="flex mt-5">
              <a
                href="https://www.facebook.com/arif.hossain.79274"
                target="_blank"
              >
                <FaFacebook className="w-12 h-8"></FaFacebook>
              </a>
              <a href="https://www.linkedin.com/in/arif-raj/" target="_blank">
                <FaLinkedin className="w-12 h-8"></FaLinkedin>
              </a>
              <a href="https://github.com/arifraj9911" target="_blank">
                <FaGithub className="w-12 h-8"></FaGithub>
              </a>
            </div>
          </div>
        </div>
      </div>
      <About></About>
      <Skill></Skill>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
};

export default Home;
