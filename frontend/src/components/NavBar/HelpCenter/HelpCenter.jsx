import React from 'react';
import { useNavigate } from 'react-router-dom';
import Style from './HelpCenter.module.css';

const HelpCenter = () => {
  const navigate = useNavigate();

  const helpCenter = [
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Contact Us',
      link: 'contact-us',
    },
    {
      name: 'Subscription',
      link: 'subscription',
    },
  ];

  const handleNavigation = (link) => {
    navigate(`/${link}`);
  };

  return (
    <div>
      {helpCenter.map((item, index) => (
        <div key={index + 1} className={Style.helpCenter}>
          <a onClick={() => handleNavigation(item.link)}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
