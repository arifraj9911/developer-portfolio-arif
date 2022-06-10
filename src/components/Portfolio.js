import React from "react";

const Portfolio = () => {
  return (
    <div className="mt-20">
      <h2 className="text-xl font-bold">Portfolio</h2>
      <hr className="w-10 mt-2 mb-4 mx-auto" />
      <h2 className="text-4xl lg:text-6xl font-bold mb-16">My Work Example</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
        <div class="card card-compact w-96 bg-black shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/hy4zL3G/Component-House.png?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Component House</span>
            </h2>
            <p>
              A Full-Stack Manufacturing Website of Parts of Computer or Laptop.
            </p>
            <div class="card-actions flex justify-start">
              <a href="https://component-house.web.app/" target="_blank">
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
        <div class="card card-compact w-96 bg-black shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/xJG6cfj/fruit-inventory.png?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project:{" "}
              <span className="font-bold">Fruits & Vegetable Inventory</span>
            </h2>
            <p>
              A Full-Stack Fruits & Vegetable Inventory Website where Buy
              Product, Update Product, Manage Product.
            </p>
            <div class="card-actions flex justify-start">
              <a href="https://fruits-inventory.web.app/" target="_blank">
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
        <div class="card card-compact w-96 bg-black shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/pRG4kn2/Wedding-photography.png?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">RAZ Photography</span>
            </h2>
            <p>
            A Photography Website Provided Service for Authorized User.
            </p>
            <div class="card-actions flex justify-start">
              <a href="https://weeding-photographer-b39e1.web.app/" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a href="https://github.com/arifraj199/raz-photography" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-black shadow-xl">
          <figure>
            <img
              src="https://i.ibb.co/GxKZ0kC/Camera-Hub.png?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body text-left">
            <h2 class="card-title text-white">
              Project: <span className="font-bold">Camera Hub</span>
            </h2>
            <p>
              A simple camera hub website with reviews.
            </p>
            <div class="card-actions flex justify-start">
              <a href="https://assignment-camera-hub.netlify.app/" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a href="https://github.com/arifraj199/camera-hub" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-compact w-96 bg-black shadow-xl">
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
            <p>
              A Simple Website where find Phone.
            </p>
            <div class="card-actions flex justify-start">
              <a href="https://gadget-fair-assignment.netlify.app/" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Live Website
                </button>
              </a>
              <a href="https://github.com/arifraj199/gadget-fair" target="_blank">
                <button class="btn btn-outline btn-primary btn-xs">
                  Project Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
