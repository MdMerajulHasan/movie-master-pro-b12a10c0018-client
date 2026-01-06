import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";

const Root = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="dark:bg-slate-950 min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
