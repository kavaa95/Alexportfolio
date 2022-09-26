import React from "react";
import EducationList from "./EducationList";
function EducationListHolder() {
  return (
    <div class="p-1 shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-2xl">
      <div className="block  bg-white rounded-xl">
        <EducationList />
      </div>
    </div>
  );
}

export default EducationListHolder;
