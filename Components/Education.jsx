import React from "react";
import Experience from "./Experience";

function Education() {
  return (
    <div className="h-screen ">
      <section className="bg-black dark:text-gray-100 h-screen">
        <section className="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container mx-auto space-y-12">
            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                className="h-80 dark:bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                <h3 className="text-3xl font-bold">EDUCATION</h3>
                <span className="text-xs uppercase dark:text-gray-400">
                  Join, it's free
                </span>
                <p className="my-6 dark:text-gray-400">
                  <Experience />
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Education;
