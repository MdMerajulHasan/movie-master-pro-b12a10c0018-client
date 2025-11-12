import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
