import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Project from "./Project";
import ProjectsOverview from "./ProjectsOverview";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  return (
    <div id="portfolio" className="mt-20">
      <h2 className="text-xl font-bold">Portfolio</h2>
      <hr className="w-10 mt-2 mb-4 mx-auto" />
      <h2 className="text-4xl lg:text-6xl font-bold mb-16">My Work Example</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        {/* {projects.map((project) => (
          <Project key={project.id} project={project}></Project>
        ))} */}

        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img src="https://i.ibb.co/R02mbWt/sport-Eye.png" alt="Shoes" />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Sports EYE</span>
            </h2>
            <p>A Full-Stack Sports Blog Website Build with React.</p>
            <div class="card-actions flex justify-start">
              <a href="https://sports-blog-f1e26.web.app/" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/component-house-client"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Client Code
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/component-house-server"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Server Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img src="https://i.ibb.co/tbZBQfJ/tourism.png" alt="Shoes" />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Travel Tribe</span>
            </h2>
            <p>A Full-Stack Tourism Management Website Build with React.</p>
            <div class="card-actions flex justify-start">
              <a
                href="https://tourism-management-69cfd.web.app/"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/fruits-inventory-client"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Client Code
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/fruits-inventory-server"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Server Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img src="https://i.ibb.co/Hp45D67/matrimony.png" alt="Shoes" />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Love Nest Matrimony</span>
            </h2>
            <p>A Full Stack Matrimony Website Build with React.</p>
            <div class="card-actions flex justify-start">
              <a
                href="https://project-matrimony-9e690.web.app/"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/raz-photography"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img src="https://i.ibb.co/9VjZC1v/city-palace.png" alt="Shoes" />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">City Palace</span>
            </h2>
            <p>A Real State Apartment Website Build with React</p>
            <div class="card-actions flex justify-start">
              <a
                href="https://apartment-react-assignment.web.app/"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/camera-hub"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img src="https://i.ibb.co/ykQf9pf/ticketing.png" alt="Shoes" />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Smart Ticketing</span>
            </h2>
            <p>A Simple Ticketing Website Build with Core Javascript</p>
            <div class="card-actions flex justify-start">
              <a
                href="https://smart-ticketing-assignment.netlify.app/"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/camera-hub"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact max-w-sm bg-black shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/Pmyq0sB/Gadget-fair.png?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Gadget Fair</span>
            </h2>
            <p>A Simple Website where find Phone.</p>
            <div class="card-actions flex justify-start">
              <a
                href="https://gadget-fair-assignment.netlify.app/"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a
                href="https://github.com/arifraj199/gadget-fair"
                target="_blank"
              >
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 text-right mr-16">
        <button
          onClick={() => navigate("/projects/")}
          className="btn btn-primary"
        >
          Projects Overview
          <FaArrowRight className="ml-1"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
