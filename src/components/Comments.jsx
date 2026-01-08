import React from "react";
import { motion } from "framer-motion";
import { BiUser } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const Comments = () => {
  return (
    <div>
      <h2 className="mt-5 md:mt-10 mb-4 text-primary dark:text-white font-bold text-2xl text-center md:text-4xl lg:text-6xl">
        Some Comments
      </h2>
      <div className="w-11/12 mx-auto h-full overflow-hidden bg-linear-to-br from-red-500 dark:from-[#3b82f6] to-red-300 dark:to-[#93c5fd] text-white font-bold py-4 rounded-md">
        <motion.div
          className="flex gap-8 whitespace-wrap h-full"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          <span className="flex-none h-[150px] overflow-hidden w-52 md:w-64 bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Merina</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 4.5</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="h-full text-xs lg:text-sm mt-2">
              Clean UI, fast loading, and very smooth browsing experience.
            </div>
          </span>
          <span className="flex-none w-52 md:w-64 h-[150px] overflow-hidden bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Merajul</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 5</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="flex-none h-full text-xs md:text-sm mt-2">
              I love how simple it is to add movies to my collection.
            </div>
          </span>
          <span className="flex-none w-52 md:w-64 h-[150px] overflow-hidden bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Hasan</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 4</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="flex-none h-full text-xs md:text-sm mt-2">
              Clean interface with great responsiveness on mobile and desktop.
            </div>
          </span>
          <span className="flex-none w-52 md:w-64 h-[150px] overflow-hidden bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Talukder</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 5</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="flex-none h-full text-xs md:text-sm mt-2">
              Adding, editing, and removing movies is straightforward.
            </div>
          </span>
          <span className="flex-none w-52 md:w-64 h-[150px] overflow-hidden bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Nobab</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 4.5</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="flex-none h-full text-xs md:text-sm mt-2">
              Top rated and recently added sections make discovering movies fun.
            </div>
          </span>
          <span className="flex-none w-52 md:w-64 h-[150px] overflow-hidden bg-base-200 dark:bg-slate-950 dark:text-white rounded-md text-primary p-4">
            <div className="flex items-center text-xs md:text-sm justify-between">
              <span className="flex justify-between items-center">
                <BiUser></BiUser> <p>Masud</p>
              </span>
              <span className="flex gap-1 items-center">
                <p>Rating 5</p> <BsStarFill></BsStarFill>
              </span>
            </div>
            <div className="flex-none h-full text-xs md:text-sm mt-2">
              The dark mode is perfect for late-night browsing.
            </div>
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Comments;
