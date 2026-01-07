import React from "react";
import { FaAngleDown } from "react-icons/fa";

const FAQ = () => {
  return (
    <div className="py-5 md:py-10 text-primary dark:text-white">
      <h2 className="mb-1 md:mb-4 font-bold text-2xl text-center md:text-4xl lg:text-6xl">
        My Collection
      </h2>
      <div className="space-y-1">
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold flex justify-between">
            What is Movie Master Pro?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            Movie Master Pro is a MERN-based movie management web application
            that allows users to add movies, manage personal collections, create
            a watchlist, and explore detailed information about each movie in
            one place.
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold flex justify-between">
            Need an account to use Movie Master Pro? <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            <p>Yes. You must be logged in to:</p>
            <ol className="list-disc">
              <li className="ml-4">Add movies</li>
              <li className="ml-4">Access your personal collection</li>
              <li className="ml-4">Manage your watchlist</li>
              <li className="ml-4">Remove movies you’ve added</li>
            </ol>
            <p>This ensures your data remains private and secure.</p>
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold flex justify-between">
            How can I add a movie to my collection? <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            <p>After logging in:</p>
            <ol className="list-disc">
              <li className="ml-4">Go to the Add Movie page.</li>
              <li className="ml-4">
                Fill in the movie details (title, genre, release year, etc.).
              </li>
              <li className="ml-4">Submit the form.</li>
            </ol>
            <p>The movie will be added to your personal collection.</p>
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold flex justify-between">
            Can I see detailed information about a movie? <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            <p>
              Yes. Clicking on any movie opens a Movie Details page where you
              can view:
            </p>
            <ol className="list-disc">
              <li className="ml-4">Full movie information.</li>
              <li className="ml-4">Description and metadata.</li>
              <li className="ml-4">
                Action buttons (play, edit, remove, etc.).
              </li>
            </ol>
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
          open
        >
          <summary className="collapse-title font-semibold flex justify-between">
            Can I delete a movie from the platform?
            <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            You can only remove movies that you personally added. This prevents
            users from deleting movies added by others and ensures fair usage.
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold flex justify-between">
            What technologies are used? <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            <p>Movie Master Pro is built using:</p>
            <ol className="list-disc">
              <li className="ml-4">MongoDB – Database</li>
              <li className="ml-4">Express.js – Backend framework</li>
              <li className="ml-4">React.js – Frontend UI</li>
              <li className="ml-4">Node.js – Server environment</li>
            </ol>
            <p>The movie will be added to your personal collection.</p>
          </div>
        </details>
        <details
          className="collapse bg-base-100 dark:bg-slate-900 border border-base-300"
          name="my-accordion-det-1"
        >
          <summary className="collapse-title font-semibold flex justify-between">
            Is Movie Master Pro secure? <FaAngleDown />
          </summary>
          <div className="collapse-content text-sm">
            <p>Yes:</p>
            <ol className="list-disc">
              <li className="ml-4">
                User authentication is handled securely using firebase
              </li>
              <li className="ml-4">Express.js – Backend framework</li>
              <li className="ml-4">React.js – Frontend UI</li>
              <li className="ml-4">Node.js – Server environment</li>
            </ol>
            <p>The movie will be added to your personal collection.</p>
          </div>
        </details>
      </div>
    </div>
  );
};

export default FAQ;
