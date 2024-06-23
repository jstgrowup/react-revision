import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.component.scss";
import { UserContext } from "../../context/user.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log("currentUser:", currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src="/crown.svg" alt="" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
          {currentUser ? (
            <span className="nav-link">SIGN OUT</span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
