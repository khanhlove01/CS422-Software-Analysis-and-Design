import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";

import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
const loginPage = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const navigate = useNavigate();
  const { currentUser, login, logout } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email: inputs.email,
        password: inputs.password,
      });

      if (res) {
        navigate("/");
      }
    } catch (err) {
      console.log("====================================");
      console.log(err);
      toast.error("Please input again!!!")
      console.log("====================================");
      setInputs("")
    }
  };

  const socialImage = [
    {
      social: images.test_img,
      name: "Continue with Facebook",
    },
    {
      social: images.test_img_2,
      name: "Continue with twitter",
    },
    {
      social: images.test_img_3,
      name: "Continue with Facebook",
    },
  ];
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Login</h1>
        <div className={Style.user}>
          <div className={Style.user_box}>
            <div className={Style.user_box_input}>
              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="email"
                  className={Style.user_box_input_box_label}
                >
                  <p>Email address</p>
                </label>
                <input 
                  type="email" 
                  placeholder="example@emample.com"
                  name = "email"
                  onChange={handleChange}
                  value={inputs.email}
                />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Password</p>
                  <p>
                    <a href="#">Forget password</a>
                  </p>
                </label>
                <input 
                  type="password" 
                  name = "password"
                  onChange={handleChange}
                  value={inputs.password}
                />
              </div>
            </div>

            {/* <Button btnName="Continue" classStyle={Style.button} handleClick={handleLogin}/> */}
            <button onClick={handleLogin}>Submit</button>
          </div>
        </div>
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default loginPage;
