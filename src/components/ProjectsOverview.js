import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsOverview = () => {
  return (
    <div className="my-12 lg:px-40">
      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name: <span className="font-bold">Component House</span>
        </h2>
        <p>
          A Full-Stack Manufacturing Website of Parts of Computer or Laptop. A
          User Can Buy Product and An Admin Can Manage Things.
        </p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              User can purchase product, see her/his product and cancel her/his
              product and add review and user review will be shown on homepage.
            </li>
            <li>
              An admin can manage all users, all products, update product and
              make admin any users.
            </li>
            <li>Implement jsonwebtoken in login and signup.</li>
            <li>
              International payment system implement by stripe so that user can
              do payment .
            </li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span> HTML , Tailwind CSS,
            DaisyUI, React Js, React Router, Firebase, React Hook Form, React
            Toastify, Mongodb, Express Js, Stripe.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://component-house.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">Live Website</button>
          </a>
          <a
            href="https://github.com/arifraj199/component-house-client"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">Client Code</button>
          </a>
          <a
            href="https://github.com/arifraj199/component-house-server"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">Server Code</button>
          </a>
        </div>
      </div>

      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name:{" "}
          <span className="font-bold">Fruits & Vegetable Inventory</span>
        </h2>
        <p>
          A Full-Stack Fruits & Vegetable Inventory Website where Buy Product,
          Update Product, Manage Product.
        </p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>User can log in with email and password or by Google.</li>
            <li>
              An authorized user can order products, restock quantity and manage
              products. He/She can see only his/her product.
            </li>
            <li>
              Implement jsonweb access token in login and signup. All route are
              private except home and blog, 404 page implement.
            </li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>HTML ,CSS, React
            Bootstrap, React Js, React Router, Firebase, React Hook Form,
            React,Toastify, Mongodb, Express Js.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://fruits-inventory.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj199/fruits-inventory-client"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/arifraj199/fruits-inventory-server"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Server Code
            </button>
          </a>
        </div>
      </div>

      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name: <span className="font-bold">RAZ Photography</span>
        </h2>
        <p>A Photography Website Provided Service for Authorized User.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              Implement authentication login , signup, social authentication
              (Google).
            </li>
            <li>Service page is private, only user can place any service.</li>
            <li>Blog page, about page and 404 page implement.</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>HTML ,CSS, React
            Bootstrap, React Js, React Router, Firebase, React Firebase
            Hooks,React Toastify, Mongodb, Express Js.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://weeding-photographer-b39e1.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj199/raz-photography"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Project Code
            </button>
          </a>
        </div>
      </div>

      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name: <span className="font-bold">Camera Hub</span>
        </h2>
        <p>A simple single page application where using react router.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              Design implement using react bootstrap and for responsive using
              media query.
            </li>
            <li>
              React router implement and added 2 chart on the dashboard route
              using react chart
            </li>
            <li>404 page, blogs page and FAQ page implement</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>HTML ,CSS, React
            Bootstrap, React Js, React Router,React Chart
          </p>
        </div>
        <div className="mt-4">
          <a href="https://assignment-camera-hub.netlify.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a href="https://github.com/arifraj199/camera-hub" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Project Code
            </button>
          </a>
        </div>
      </div>

      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name: <span className="font-bold">Gadget Fair</span>
        </h2>
        <p>A simple single page application where using react router.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>Design implement using css and bootstrap.</li>
            <li>Website is responsive and using media query for responsive</li>
            <li>Search optionality implement.</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>HTML ,CSS,
            Bootstrap,JavaScript,ES6
          </p>
        </div>
        <div className="mt-4">
          <a href="https://gadget-fair-assignment.netlify.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a href="https://github.com/arifraj199/gadget-fair" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Project Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
