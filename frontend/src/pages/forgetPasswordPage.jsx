import React from 'react'

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import images from "../img/index";
import { Button } from "../components/componentsindex";

const ForgetPasswordPage = () => {
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
                //   onChange={handleChange}
                //   value={inputs.email}
                />
              </div>
            </div>

            <Button btnName="Submit" classStyle={Style.button} handleClick={()=>{}}/>
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