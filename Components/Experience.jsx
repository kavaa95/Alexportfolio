import React from "react";
import EducationList from "./EducationList";
import EducationListHolder from "./EducationListHolder";
import GiftComponents from "./GiftComponents";
function Experience() {
  return (
    <div className="">
      <div className="w-full  text-white text-center">
        <p class="text-[4vw] font-medium text-white">EDUCATION</p>
      </div>
      <div className="grid sm:grid-col-1 md:grid-cols-2 m-5 gap-5 ">
        <EducationListHolder />
        <EducationListHolder />
      </div>
    </div>
  );
}

export default Experience;
