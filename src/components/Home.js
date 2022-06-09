import React from "react";

const Home = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-left flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co/5GVcySg/My-project-5.png"
          class="max-w-sm rounded-lg shadow-2xl" alt="arif"
        />
        <div className="mr-36">
          <h1 class="text-2xl font-bold">Hello! I'm</h1>
          <h1 class="text-7xl font-bold">Arif Hossain</h1>
          <p class="py-6">
            Jr. Front End Web Developer
          </p>
          <div className="flex">
          <button class="btn btn-accent rounded-3xl mr-3">Hire Me</button>
          <button class="btn btn-outline rounded-3xl text-white">Download Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
