import React from "react";
import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex justify-center items-center flex-col my-5 md:my-10">
      <h1 className="mb-1 text-primary text-base md:text-4xl font-bold">
        Page Not Found-404! Go Back Home
      </h1>
      <Link to="/" className="btn btn-secondary w-20">
        Home
      </Link>
    </div>
  );
};

export default Error404;
