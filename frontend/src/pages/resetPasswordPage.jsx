import React, { useContext,useState } from 'react'
//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import Cookies from 'js-cookie';
const ResetPasswordPage = () => {
    const {linkResetPassword} = useContext(AuthContext)
    const [inputs, setInputs] = useState({
      password: "",
      passwordConfirmed: ""
    });
    const resetToken = Cookies.get('resetToken');
    const handleChange = (e) => {
      setInputs((preV) => ({ ...preV, [e.target.name]: e.target.value }));
    };
    const handleReset = async (e) => {
      try {
        const response = await axios.patch("http://localhost:3000/api/v1/users/resetPassword/"+resetToken,{   
          password: inputs.password,
          passwordConfirmed: inputs.passwordConfirmed
        })
        console.log('====================================');
        console.log("Successfully reset password");
        console.log('====================================');
      } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      }
    }

    return (
        <div className={Style.login}>
          <div className={Style.login_box}>
            <h1>Reset Password</h1>
            <div className={Style.user}>
              <div className={Style.user_box}>
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
                      name = "password"
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
                      name = "passwordConfirmed"
                      onChange={handleChange}
                      value={inputs.passwordConfirmed}
                    />
                  </div>
                </div>
    
                <Button btnName="Continue" classStyle={Style.button} handleClick={handleReset}/>
                {/* <button onClick={handleLogin}>Submit</button> */}
              </div>
            </div>
            <p className={Style.login_box_para}>
              New user? <a href="#">Create an account</a>
            </p>
          </div>
        </div>
      );
}

export default ResetPasswordPage