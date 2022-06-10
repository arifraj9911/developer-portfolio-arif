import React from "react";

const Skill = () => {
  return (
    <div className="text-center my-10">
      <h2 className="text-lg">Skill</h2>
      <h2 className="text-6xl font-bold mb-4">My Expertise</h2>
      <div className="block lg:flex gap-20 justify-center mt-12">
        <div className="flex flex-col text-left">
          <span className="font-bold mb-1">HTML5</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="95"
            max="100"
          ></progress>
          <span className="font-bold mb-1">CSS3</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="85"
            max="100"
          ></progress>
          <span className="font-bold mb-1">JavaScript</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="78"
            max="100"
          ></progress>
          <span className="font-bold mb-1">React Js</span>
          <progress
            class="progress progress-error w-80"
            value="90"
            max="100"
          ></progress>
        </div>
        <div className="flex flex-col text-left">
          <span className="font-bold mb-1">Firebase</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="80"
            max="100"
          ></progress>
          <span className="font-bold mb-1">Node Js</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="60"
            max="100"
          ></progress>
          <span className="font-bold mb-1">Express Js</span>
          <progress
            class="progress progress-error w-80 mb-4"
            value="75"
            max="100"
          ></progress>
          <span className="font-bold mb-1">Mongodb</span>
          <progress
            class="progress progress-error w-80"
            value="66"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skill;
