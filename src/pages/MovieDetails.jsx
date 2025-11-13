import React, { use } from "react";
import { BsStarFill } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";

const MovieDetails = () => {
  const movie = useLoaderData();
  const { user } = use(AuthContext);

  return (
    <div className="hero bg-base-200 my-5 md:my-10">
      <div className="hero-content text-xs md:text-base text-primary flex-col md:flex-row-reverse">
        <img src={movie.posterUrl} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div className="flex gap-0.5 items-center">
            <p className="flex gap-0.5 items-center">
              {movie.duration} min
              <FaGripLinesVertical />
            </p>
            <p className="flex gap-0.5 items-center">
              {movie.genre}
              <FaGripLinesVertical />
            </p>
            <p>{movie.releaseYear}</p>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            {movie.title}
          </h1>
          <p className="flex gap-0.5 items-center">
            {movie.rating}
            <BsStarFill></BsStarFill>
          </p>
          <p className="py-6">{movie.plotSummary}</p>
          <div className="flex gap-0.5 items-center">
            <p className="flex gap-0.5 items-center">
              {movie.language}
              <FaGripLinesVertical />
            </p>
            <p className="flex gap-0.5 items-center">
              {movie.country}
              <FaGripLinesVertical />
            </p>
            <p>{movie.director}</p>
          </div>
          <p>Cast: {movie.cast}</p>
          <p>Added By: {movie.addedBy}</p>
          {user?.email === movie?.addedBy && (
            <div className="flex gap-5 items-center">
              <Link to={`/movies/update/${movie._id}`}>
                <button className="btn btn-secondary w-20">Edit</button>
              </Link>
              <button className="btn btn-primary w-20">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
