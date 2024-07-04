import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectsOverview = () => {
  return (
    <div className="my-12 lg:px-40">
      <div className="text-left shadow-lg bg-base-200 mb-4 p-10">
        <h2 className="text-2xl lg:text-4xl mb-2">
          Project Name: <span className="font-bold">Sports EYE</span>
        </h2>
        <p>A Full-Stack Sports Blog Website Build with React.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              An authenticate user can add his/her blog , edit and also can
              update his/her blog.
            </li>
            <li>
              An user can add his/her blog in the wishlist, there he/she can
              remove his/her blog from the wishlist.
            </li>
            <li>An user can comment on others blogs.</li>
            <li>
              Implement Search Functionality, Dark/Light Theme, Filtered Item
              Show by Category
            </li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span> React, Express js,
            Node js, MongoDB, Firebase,
            React-Data-Table-Component,React-Helmet,React-Icon,TypeWriter,AOS
            Package,TanStack Query,Framer Motion,JSON Web Token,Tailwind
            CSS,Daisi UI, Html.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://sports-blog-f1e26.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/sports-blog-client"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/sports-blog-server"
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
          Project Name: <span className="font-bold">Travel Tribe</span>
        </h2>
        <p>A Full-Stack Tourism Management Website using React.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              Authenticate user can add tourist spot place, user can delete and
              update his/her added spots.
            </li>
            <li>
              Unauthorized users will not able to view spots details, instead
              he/she will be redirected to login page
            </li>
            <li>Implement JSON Web Access Token in login and signup.</li>
            <li>Implement Dark/Light Functionality.</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>React, Firebase,
            Express JS, MongoDB, Tailwind CSS, Daisy UI, Typewriter, AOS
            package, Swiper Slider..
          </p>
        </div>
        <div className="mt-4">
          <a href="https://tourism-management-69cfd.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/tourism-management-client"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/tourism-management-server"
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
          Project Name: <span className="font-bold">Love Nest Matrimony</span>
        </h2>
        <p>A Full Stack Matrimony Website Build with React</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>
              An authenticate user can see biodatas of people and see also
              details of the biodata.
            </li>
            <li>
              Authenticate user can get desire biodata contact information by
              paying 5 doller.
            </li>
            <li>Premium member can get contact information without paying.</li>
            <li>
              Premium member can keep his/her desire biodata in the add to
              favorite dashboard
            </li>
            <li>
              Dashboard Implemented where exist Admin Dashboard and User
              Dashboard
            </li>
            <li>
              User can add her/his biodata from edit biodata in the user
              dashboard, also can send request to admin for making premium
              member
            </li>
            <li>An Admin can make user admin and can make a user premium.</li>
            <li>Got Married route added to the user dashboard</li>
            <li>International payment gateway Stripe where Implemented.</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>React, Firebase,
            Express JS, MongoDB, Stripe, Json Web Token, TanStack Query,
            Flowbite React, Tailwind CSS, HTML.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://project-matrimony-9e690.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/project-matrimony-client"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Client Code
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/project-matrimony-server"
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
          Project Name: <span className="font-bold">City Palace</span>
        </h2>
        <p>A Real State Apartment Website Build with React.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>An authenticate user can see apartment details.</li>
            <li>Authenticate user can update profile image and name.</li>
            <li>Agent route implement which is a private route</li>
            <li>Implement Google, Github login authentication.</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span>React, Firebase,
            Swiper Slider,AOS Package, Tailwind CSS, Daisi UI, Html.
          </p>
        </div>
        <div className="mt-4">
          <a href="https://apartment-react-assignment.web.app/" target="_blank">
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/real-state-apartment"
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
          Project Name: <span className="font-bold">Smart Ticketing</span>
        </h2>
        <p>A Simple Ticket Management System Implement with Core JavaScript.</p>
        <div className="mt-5">
          <p className="font-bold mb-2">Features:</p>
          <div className="ml-6">
            <li>One user can select ticket maximum 4</li>
            <li>Can be use coupon which will count a discount with price.</li>
            <li>Responsive Design added by using media query</li>
          </div>
          <p className="mt-4">
            <span className="font-bold">Technology:</span> JavaScript,Tailwind
            CSS, Daisi UI, Html.
          </p>
        </div>
        <div className="mt-4">
          <a
            href="https://smart-ticketing-assignment.netlify.app/"
            target="_blank"
          >
            <button class="btn btn-link btn-xs text-1xl lg:text-xl">
              Live Website
            </button>
          </a>
          <a
            href="https://github.com/arifraj9911/Smart-Ticketing-Assignment"
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
