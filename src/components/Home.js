import React from "react";
import About from "./About";
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Skill from "./Skill";

const Home = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-left flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/5GVcySg/My-project-5.png"
            class="max-w-sm rounded-lg shadow-2xl"
            alt="arif"
          />
          <div className="mr-52">
            <h1 class="text-2xl font-bold">Hello! I'm</h1>
            <h1 class="text-7xl font-bold">Arif Hossain</h1>
            <p class="py-6">Jr. Front End Web Developer</p>
            <div className="flex">
              <button class="btn btn-accent rounded-3xl mr-3">Hire Me</button>
              <a href="https://drive.google.com/file/d/1fxMgPQkQlxDWwFoU-ApNBFZNjKBOFJXy/view?usp=sharing"
               target="_blank"
              >
                <button class="btn btn-outline rounded-3xl text-white">
                  Download Resume
                </button>
              </a>
            </div>
            <div className="flex mt-5">
                <a href="https://www.facebook.com/arif.hossain.79274" target="_blank"><FaFacebook className="w-12 h-8"></FaFacebook></a>
                <a href="https://www.linkedin.com/in/arif-hossain-04717322a/" target="_blank"><FaLinkedin className="w-12 h-8"></FaLinkedin></a>
                <a href="https://github.com/arifraj199" target="_blank"><FaGithub className="w-12 h-8"></FaGithub></a>
            </div>
          </div>
         
        </div>
      </div>
      <About></About>
      <Skill></Skill>
    </div>
  );
};

export default Home;
