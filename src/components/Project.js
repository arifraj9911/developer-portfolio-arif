import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ProjectsOverview from "./ProjectsOverview";
import { useParams } from 'react-router-dom';

const Project = ({ project }) => {
    const {id} = useParams();
  const navigate = useNavigate();
  return (
    <div class="card card-compact w-96 bg-black shadow-xl">
      <figure>
        <img width="400" height="225" src={project.picture} alt="Shoes" />
      </figure>
      <div class="card-body text-left">
        <h2 class="card-title text-white">
          Project: <span className="font-bold">{project.project_name}</span>
        </h2>
        <p>{project.description}</p>
      </div>
      <div className="w-1/2 mx-start pb-3">
        <button
          onClick={() => navigate(`/overview/${id}`)}
          className="btn btn-outline btn-sm btn-primary"
        >
          Project Overview
          <FaArrowRight className="ml-1"></FaArrowRight>
        </button>
      </div>
    </div>
  );
};

export default Project;
