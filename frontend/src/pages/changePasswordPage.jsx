import React, { useState } from "react";
import { Button } from "../components/componentsindex";
import axios from "axios";
//Internal Import
import Style from "../styles/login.module.css";

const ChangePasswordPage = () => {
  const [current, setCurrent] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  console.log(current.token);
  const [inputs, setInputs] = useState({
    passwordCurrent: "",
    password: "",
    passwordConfirmed: "",
  });

  const handleChange = (e) => {
    setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
  };

  const handleChangePassword = async (e) => {
    try {
      const response = await axios.patch("http://localhost:3000/api/v1/users/updateMyPassword",
        {
            passwordCurrent: inputs.passwordCurrent,
            password: inputs.password,
            passwordConfirmed: inputs.passwordConfirmed
        },
        {
          headers: {
            Authorization: `Bearer ${current.token}`,
          },
        }
      );
    } catch (error) {
      console.log("====================================");
      console.log(error);
      console.log("====================================");
    }
  };

  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Change Password</h1>
        <div className={Style.user}>
          <div className={Style.user_box}>
            <div className={Style.user_box_input}>
              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Current Password</p>
                </label>
                <input
                  type="password"
                  name="passwordCurrent"
                  onChange={handleChange}
                  value={inputs.passwordCurrent}
                />
              </div>
            </div>
            <div className={Style.user_box_input}>
              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>New Password</p>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={inputs.password}
                />
              </div>
            </div>
            <div className={Style.user_box_input}>
              <div className={Style.user_box_input_box}>
                <label
                  htmlFor="password"
                  className={Style.user_box_input_box_label}
                >
                  <p>Confirm Password</p>
                </label>
                <input
                  type="password"
                  name="passwordConfirmed"
                  onChange={handleChange}
                  value={inputs.passwordConfirmed}
                />
              </div>
            </div>

            <Button
              btnName="Confirm"
              classStyle={Style.button}
              handleClick={handleChangePassword}
            />
            {/* <button onClick={handleLogin}>Submit</button> */}
          </div>
        </div>
        <p className={Style.login_box_para} onClick={() => {}}>
          New user? <a href="">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default ChangePasswordPage;
