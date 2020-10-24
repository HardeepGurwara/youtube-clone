import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
function Header() {
  const [input, setInput] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </Link>
      </div>
      <div className="header__center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search"
          className="header__input"
          type="text"
        />
        <Link to={`/search/${input}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>

      <div className="header__right">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar className="header__icon" />
      </div>
    </div>
  );
}

export default Header;
