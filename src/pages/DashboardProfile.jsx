import React, { use, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { div } from "framer-motion/client";
import Loader from "../components/Loader";
import toast from "react-hot-toast";
import { BiUser } from "react-icons/bi";

const DashboardProfile = () => {
  const { user, update, loading, setLoading } = use(AuthContext);
  const [dataShow, setDataShow] = useState(true);
  const [updateShow, setUpdateShow] = useState(false);

  const handleEdit = () => {
    setDataShow(false);
    setUpdateShow(true);
  };

  const handleUpdate = (e) => {
    setLoading(true);
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const updatedData = { displayName: name, photoURL: photo };
    update(updatedData)
      .then(() => {
        setLoading(false);
        setDataShow(true);
        setUpdateShow(false);
      })
      .catch((err) => toast(err.message));
  };

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div className="">
      <h2 className="pt-5 md:pt-10 mb-1 md:pb-4 text-primary dark:text-white font-bold text-2xl text-center md:text-4xl lg:text-6xl">
        Profile
      </h2>
      <div className="h-screen bg-base-200 dark:bg-slate-800">
        <div className="flex justify-center items-center flex-col gap-1">
          {user.photoURL ? (
            <img
              className="h-[150px] w-[150px] rounded-[50%]"
              src={user.photoURL}
              alt="user photo"
            />
          ) : (
            <span>
              <BiUser
                className="text-primary dark:text-white"
                size={80}
              ></BiUser>
            </span>
          )}
          {dataShow && (
            <div className="text-primary dark:text-white">
              <p>Name: {user.displayName}</p>
              <p>Emil: {user.email}</p>
              <button onClick={handleEdit} className="btn-primary w-full">
                Edit
              </button>
            </div>
          )}
          {updateShow && (
            <form
              className="text-primary dark:text-white"
              onSubmit={handleUpdate}
            >
              <label>
                Name{" "}
                <input
                  name="name"
                  className="input text-primary dark:text-secondary"
                  type="text"
                  defaultValue={user.displayName}
                ></input>
              </label>
              <br></br>
              <label>
                Photo{" "}
                <input
                  name="photo"
                  className="input text-primary dark:text-secondary"
                  type="url"
                  defaultValue={user.photoURL}
                ></input>
              </label>
              <button type="submit" className="btn-primary w-full mt-1">
                Update
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
