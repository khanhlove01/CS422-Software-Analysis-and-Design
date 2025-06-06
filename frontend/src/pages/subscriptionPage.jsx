import React from 'react'
import { IoDiamond } from "react-icons/io5";
//Internal Import
import Style from "../styles/subscriptionPage.module.css"
import Subscription from '../subscription/Subscription';

const SubscriptionPage = () => {
    const subscriptionArray = [
        {
          plan: "STARTER",
          price: "$5/mo",
          popular: "",
          service: ["Automated Reporting", "Faster Processing", "Customizations"],
          info: "Literally you probably haven't heard of them jean shorts.",
        },
        {
          plan: "BASIC",
          price: "$15/mo",
          popular: "POPULAR",
          service: [
            "Everything in Starter",
            "100 Builds",
            "Progress Reports",
            "Premium Support",
          ],
    
          info: "Literally you probably haven't heard of them jean shorts.",
        },
        {
          plan: "PLUS",
          price: "$25/mo",
          popular: "",
          service: [
            "Everything in Basic",
            "Unlimited Builds",
            "Advanced Analytics",
            "Company Evaluations",
          ],
    
          info: "Literally you probably haven't heard of them jean shorts.",
        },
      ];
      return (
        <div className={Style.Subscription}>
          <div className={Style.Subscription_box}>
            <div className={Style.Subscription_box_info}>
              <h1><IoDiamond className={Style.icon}/> Subscription</h1>
              <p>Pricing to fit the needs of any companie size.</p>
            </div>
    
            <div className={Style.Subscription_box_box}>
              {subscriptionArray.map((el, i) => (
                <Subscription key={i + 1} i={1} el={el} />
              ))}
            </div>
          </div>
        </div>
      );
}

export default SubscriptionPage