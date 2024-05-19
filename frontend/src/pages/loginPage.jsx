import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";

import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";
const loginPage = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.state?.message) {
      toast.success(location.state.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [location.state]);
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
      toast.error("Please input again!!!");
      console.log("====================================");
      setInputs("");
    }
  };

  return (
    <div className={Style.login}>
      <ToastContainer />
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
                  name="email"
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
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                />
              </div>
            </div>

            <Button
              btnName="Continue"
              classStyle={Style.button}
              handleClick={handleLogin}
            />
            {/* <button onClick={handleLogin}>Submit</button> */}
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
