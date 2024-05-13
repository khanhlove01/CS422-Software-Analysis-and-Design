import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";

const ResetPasswordPage = () => {
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
                    //   onChange={handleChange}
                    //   value={inputs.password}
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
                      name = "password"
                    //   onChange={handleChange}
                    //   value={inputs.password}
                    />
                  </div>
                </div>
    
                <Button btnName="Continue" classStyle={Style.button} handleClick={()=>{}}/>
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