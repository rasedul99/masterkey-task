import React from "react";
import mail from "../Assets/header-icon/mail.png";
import notification from "../Assets/header-icon/notification.png";
import profile from "../Assets/header-icon/profile.png";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>Headphone</p>
        <p>For the top band</p>
      </div>
      <div>
        <div className="flex items-center">
          <SearchBar />
          <div className="flex gap-3">
            <img src={mail} className="h-[47px] w-[47px]" />
            <img src={notification} className="h-[47px] w-[47px]" />
            <img src={profile} className="h-[47px] w-[47px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
