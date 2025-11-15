import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center my-5 items-center md:my-10">
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loader;
