import React from "react";
import { useState } from "react";
//Internal Import
import Style from "../styles/login.module.css";
import { Button } from "../components/componentsindex";
import images from "../img/index";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpPage = () => {
  const [checkToast, setCheckToast] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    confirmedPassword: ""
  });

  // const MAX_PASSWORD_CHAR = 16;
  // const MIN_PASSWORD_CHAR = 8;

  // const validatePassword = (password) => {
  //   if (
  //     password.length < MIN_PASSWORD_CHAR ||
  //     password.length > MAX_PASSWORD_CHAR
  //   ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // };

  const handleChange = (e) => {
    setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
  };
  const handleSignUp = async (e) => {
    // console.log(validatePassword(inputs.password));
    // if (!validatePassword(inputs.password)) {
    //   toast.error(
    //     `Password must be between ${MIN_PASSWORD_CHAR} and ${MAX_PASSWORD_CHAR} characters`
    //   );
    //   return;
    // }

    // e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/signup", {
        name: inputs.username,
        email: inputs.email,
        password: inputs.password,
        passwordConfirmed: inputs.confirmedPassword
      });
      e.preventDefault();
      console.log("Sign-up successful!");
      setCheckToast(true);
      toast.success("Registration successful!!!"); // Display success toast
      window.location.reload();
      // Handle successful sign-up, e.g., redirect to a different page or display a success message.
    } catch (err) {
      console.log(err);
      toast.error(`Registration failed!!!`); // Display error toast
      setInputs("");
    }
  };
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>SignUp</h1>
        <div className={Style.user}>
          <div className={Style.user_box}>
            <div className={Style.user_box_input}>
              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="email"
                  className={Style.user_box_input_box_label}
                >
                  Email address
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
                  htmlFor="username"
                  className={Style.user_box_input_box_label}
                >
                  <p>Username</p>
                </label>
                <input 
                  type="text" 
                  placeholder="Username"
                  name="username"
                  onChange={handleChange}
                  value={inputs.username}
                  />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Password</p>
                </label>
                <input 
                  type="password" 
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                  />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Confirm Password</p>
                </label>
                <input 
                  type="password" 
                  name="confirmedPassword"
                  onChange={handleChange}
                  value={inputs.confirmedPassword}
                />
              </div>
            </div>

            <Button btnName="Continue" classStyle={Style.button} handleClick={handleSignUp}/>
          </div>
        </div>
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
