import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cart from "../Assets/navIcon/cart.png";
import contact from "../Assets/navIcon/contact.png";
import explore from "../Assets/navIcon/explore.png";
import help from "../Assets/navIcon/help.png";
import history from "../Assets/navIcon/history.png";
import home from "../Assets/navIcon/home.png";
import profile from "../Assets/navIcon/profile.png";
import saved from "../Assets/navIcon/saved.png";
import selling from "../Assets/navIcon/selling.png";
import settings from "../Assets/navIcon/settings.png";

const SideNav = () => {
  const navItems = [
    { navText: "Home", img: home },
    { navText: "Explore", img: explore },
    { navText: "Saved", img: saved },
    { navText: "Cart", img: cart },
    { navText: "Selling", img: selling },
    { navText: "Profile", img: profile },
    { navText: "History", img: history },
    { navText: "Contact us", img: contact },
    { navText: "Setting", img: settings },
  ];
  return (
    <div>
      <div className="flex items-center justify-center py-8 gap-4">
        <img src={logo} alt="logo" />
        <h3>MK Sounds</h3>
      </div>
      <ul className="flex flex-col gap-8">
        {navItems.map((item) => (
          <li className="mx-10">
            <Link to={item.navText} className="flex gap-7">
              <img src={item.img} alt={item.navText} />
              <p>{item.navText}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-5 mx-2 mb-2 relative">
        <img src={help} />
        <p className="absolute bottom-11 left-2 right-5 font-semibold text-base text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum{" "}
        </p>
      </div>
    </div>
  );
};

export default SideNav;
