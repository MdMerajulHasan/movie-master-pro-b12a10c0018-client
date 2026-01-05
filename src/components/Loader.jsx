import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center py-5 items-center md:py-10 dark:bg-slate-700">
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
      <span className="loading loading-bars loading-xl"></span>
    </div>
  );
};

export default Loader;
