import React from "react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex h-screen justify-center dark:bg-slate-950 items-center flex-col py-5 md:py-10">
      <h1 className="mb-1 text-primary dark:text-white text-base md:text-4xl font-bold">
        Page Not Found-404! Go Back Home
      </h1>
      <Link to="/" className="btn btn-secondary w-20">
        Home
      </Link>
    </div>
  );
};

export default Error404;
