import React, { use } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { name } = use(AuthContext);
  return (
    <div>
      <h1>this is home. I am {name}</h1>
    </div>
  );
};

export default Home;
