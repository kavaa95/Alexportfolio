import React from "react";

function EducationList() {
  return (
    <div>
      <article class="p-4 bg-gray-800 border border-gray-700 rounded-xl">
        <div class="flex items-center">
          <div class="ml-3">
            <p class="text-lg font-medium text-white">EDUCATION</p>
          </div>
        </div>

        <ul class="mt-4 space-y-2">
          {[1, 2].map((a) => (
            <li>
              <a
                href="#"
                class="block h-full p-4 border border-gray-700 rounded-lg hover:border-pink-600"
              >
                <div className="flex items-center space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-10 h-10 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <p class="text-xl font-medium dark:text-white title-font mb-2">
                    Farmingdale State College
                  </p>
                </div>
                <p class="mt-1 text-md font-medium text-gray-300">
                  Bachelor of Science-BS, Applied Mathematics
                </p>{" "}
                <p class="mt-1 text-sm font-medium text-gray-300">2015-2022</p>
                <p class="mt-1 text-md font-medium text-gray-300">Grade: 3.5</p>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}

export default EducationList;
