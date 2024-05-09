import React, { useState } from "react";

//Internal Import
import Style from "./LoginForm.module.css";
import { Button } from "../../components/componentsindex";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const submitAccount = () => {
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className={Style.LoginForm}>
      <div className={Style.LoginForm_box}>
        <div className={Style.LoginForm_box_username}>
          <input
            type="text"
            placeholder="Input your username...."
            className={Style.LoginForm_box_username_input}
            onChange={(e) => handleUsername(e)}
          />
        </div>
        <div className={Style.LoginForm_box_password}>
          <input
            type="password"
            placeholder="Input your password...."
            className={Style.LoginForm_box_password_input}
            onChange={(e) => handlePassword(e)}
          />
        </div>
        <Button btnName="Submit" handleClick={() => submitAccount()} />
      </div>
    </div>
  );
};

export default LoginForm;
