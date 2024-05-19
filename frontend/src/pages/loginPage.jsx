import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Style from "../styles/login.module.css";
import { Button } from "../components/componentsindex";
import { AuthContext } from "../context/authContext";
import { ToastContainer, toast } from "react-toastify";

const LoginPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

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
      // Clear the state to prevent the toast from showing again
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate, location.pathname]);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({
        email: inputs.email,
        password: inputs.password,
      });

      if (res) {
        navigate("/", { state: { message: "You have been logged in successfully!" } });
      }
    } catch (err) {
      toast.error("Please input again!!!");
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
          </div>
        </div>
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
