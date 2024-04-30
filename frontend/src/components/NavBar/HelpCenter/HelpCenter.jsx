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
      link: "sign-in",
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
          {/* <link rel="stylesheet" href={`${item.link}`}>{item.name}</link> */}
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  )
}

export default HelpCenter