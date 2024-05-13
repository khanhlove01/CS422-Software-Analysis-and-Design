import React from "react";
import { useState } from "react";
//Internal Import
import Style from "../styles/login.module.css";
import { Button } from "../components/componentsindex";
import images from "../img/index";

const SignUpPage = () => {
  const [checkToast, setCheckToast] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
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
                <input type="email" placeholder="example@emample.com" />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="username"
                  className={Style.user_box_input_box_label}
                >
                  <p>Username</p>
                </label>
                <input type="text" />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Password</p>
                </label>
                <input type="password" />
              </div>

              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Confirm Password</p>
                </label>
                <input type="password" />
              </div>
            </div>

            <Button btnName="Continue" classStyle={Style.button} />
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
