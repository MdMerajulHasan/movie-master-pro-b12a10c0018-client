import React, { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.init";
const AuthProvider = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  console.log(user);

  // register with email and password
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login with email and password
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login or signup with google
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // update user name and photoURL
  const update = (updatedData) => {
   return updateProfile(auth.currentUser, updatedData);
  };

  const authInfo = {
    register,
    user,
    setUser,
    googleLogin,
    login,
    update,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
