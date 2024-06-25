import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.component.scss";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { cartIsOpen, setcartIsOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    return await signOutUser();
  };
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

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <div onClick={() => setcartIsOpen(!cartIsOpen)}>
            <CartIcon />
          </div>
        </div>
        {cartIsOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
