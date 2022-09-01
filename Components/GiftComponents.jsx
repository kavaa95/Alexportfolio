import React from "react";

function GiftComponents({ src, height, width }) {
  return (
    <div class=" relative ">
      <iframe src={src} width={width} height={height}></iframe>

      <div className={`absolute text-5xl top-0 left-0  h-full w-full`}></div>
    </div>
  );
}

export default GiftComponents;
