import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/LoginAndSignUp";
import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
const loginPage = () => {

  const navigate = useNavigate();
  const { currentUser, login, logout } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
  };

  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await login({
  //       userId: inputs.username,
  //       password: inputs.password,
  //     });

  //     if (res) {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.log("====================================");
  //     console.log(err);
  //     toast.error("Please input again!!!")
  //     console.log("====================================");
  //     setInputs("")
  //   }
  // };
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Login</h1>
        <LoginAndSignUp />
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default loginPage;
