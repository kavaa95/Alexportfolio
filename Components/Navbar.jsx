import React from "react";

function Navbar() {
  return (
    <>
      <div class="w-full sticky top-0 z-50 ">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
          <div class="w-full navbar bg-base-300">
            <div class="flex-none lg:hidden">
              <label for="my-drawer-3" class="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div class="flex-1 px-2 mx-2 ">
              <h1 class="m-auto md:m-0"> Alex Porfolio</h1>
              <div className=" m-auto hidden lg:block">
                <a class="mr-5 ">Home</a>
                <a class="mr-5 ">About</a>
                <a class="mr-5 ">Portfolio</a>
                <a class="mr-5 ">Service</a>
                <a class="mr-5 ">Contact</a>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="drawer-side ">
          <label for="my-drawer-3" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
            <li>
              <a class="mr-5 ">First Link</a>
            </li>
            <li>
              <a class="mr-5 ">Second Link</a>
            </li>
            <li>
              <a class="mr-5 ">Third Link</a>
            </li>
            <li>
              <a class="mr-5 ">Fourth Link</a>
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
}

export default Navbar;
