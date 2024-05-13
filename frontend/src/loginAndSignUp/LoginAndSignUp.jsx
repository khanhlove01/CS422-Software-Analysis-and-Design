import React, { useState } from 'react'

//Internal Import
import Style from "./LoginAndSignUp.module.css"
import images from "../img/index"
import { Button } from '../components/componentsindex'

const LoginAndSignUp = () => {
    const [activeBtn, setActiveBtn] = useState(1);

    const socialImage = [
      {
        social: images.test_img,
        name: "Continue with Facebook",
      },
      {
        social: images.test_img_2,
        name: "Continue with twitter",
      },
      {
        social: images.test_img_3,
        name: "Continue with Facebook",
      },
    ];
    return (
      <div className={Style.user}>
        <div className={Style.user_box}>  
          <div className={Style.user_box_input}>
            <div className={Style.user_box_input_box}>
              <label htmlFor="email">Email address</label>
              <input type="email" placeholder="example@emample.com" />
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
              <input type="password" />
            </div>
          </div>
  
          <Button btnName="Continue" classStyle={Style.button} />
        </div>
      </div>
    );
}

export default LoginAndSignUp