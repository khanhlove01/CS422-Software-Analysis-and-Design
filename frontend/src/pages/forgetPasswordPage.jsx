import React from 'react'
import Cookies from 'js-cookie'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
import { ToastContainer, toast } from "react-toastify";


const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  const {linkResetPassword,setLinkResetPassword} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    email: "",
  });

const handleChange = (e) => {
  setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
};

const handleForgetPassword = async (e) => {
    try {
      //e.preventDefault();
      const response = await axios.post("http://localhost:3000/api/v1/users/forgotPassword",{
        email: inputs.email
      })
      //setLinkResetPassword(response.data.data)
      console.log("Sent successful!");
      toast.success("Email is sent successfully");
      console.log(response.data.data.resetToken);
      const resetToken = response.data.data.resetToken;
      Cookies.set('resetToken', resetToken);
      //window.location.reload();
    } catch (error) {
      toast.error("Cannot send the email");
      console.log(error);
    }
}
const handleClickCreate = () =>{
  navigate("/sign-up");
}


  return (
    <div className={Style.login}>
      <ToastContainer />
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
        <p className={Style.login_box_para} onClick={handleClickCreate}>
          New user? <a href="#">Create an account</a>
        </p>
      </div>
    </div>
  )
}

export default ForgetPasswordPage