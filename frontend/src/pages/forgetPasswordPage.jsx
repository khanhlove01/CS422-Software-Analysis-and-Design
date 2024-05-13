import React from 'react'
import { useState } from 'react';
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";
import axios from 'axios';

const ForgetPasswordPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
  });

const handleChange = (e) => {
  setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
};

const handleForgetPassword = async (e) => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/users/forgotPassword",{
        email: inputs.email
      })
      e.preventDefault();
      console.log("Sent successful!");
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
}

  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>Forget Password</h1>
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
            </div>

            <Button btnName="Submit" classStyle={Style.button} handleClick={handleForgetPassword}/>
            {/* <button onClick={handleLogin}>Submit</button> */}
          </div>
        </div>
        <p className={Style.login_box_para}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  )
}

export default ForgetPasswordPage