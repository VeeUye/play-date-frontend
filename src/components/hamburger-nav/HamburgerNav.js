import React from "react";
import "./hamburgernav.css";
import { stack as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

const HamburgerNav = (props) => {
  return (
    // Pass on our props
    <Menu {...props} right>
      <Link id="home" className="bm-item" to="/">
        My Profile
      </Link>
      <Link id="create-event" className="bm-item" to="/create-event">
        Create Event
      </Link>
      <Link id="my-events" className="bm-item" to="/my-events">
        My Events
      </Link>
      <Link id="sign-out" className="bm-item" to="/sign-out">
        Sign Out
      </Link>
      {/* <a className="bm-item" href="/">
        My Profile
      </a>

      <a className="bm-item" href="/createevent">
        Create Event
      </a>

      <a className="bm-item" href="/my-events">
        My Events
      </a>

      <a className="bm-item" href="/signout">
        Sign Out
      </a> */}
    </Menu>
  );
};

export default HamburgerNav;
