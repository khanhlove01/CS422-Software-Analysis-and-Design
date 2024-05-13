import React from 'react'
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contact-us",
    },
    {
      name: "Sign In",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ]


  return (
    <div>
      {helpCenter.map((item, index) => (
        <div key={index + 1} className={Style.helpCenter}>
          <a href={`${item.link}`}>{item.name}</a>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter