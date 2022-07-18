import React from "react";
import "./NavBar.css";
import logo from "../../images/logo.png";
import Button from "../../Global/Button/Button";
import { useNavigate } from "react-router-dom";


function NavBar({ ShowSignInButton },{ ShowHomeButton } ) {
  const navigate = useNavigate();
  function goToSignInPage() {
    navigate("/sign-in");
  }
  function goToHomePage() {
    navigate("/");
  }
  function goToOrdersPage() {
    navigate("/orders");
  }
  function goToKartPage() {
    navigate("/my-kart");
  }
  return (
    <div className="navbar_container">
      <div className="navbar_left">
        <img src={logo} />
        <a href="/">Ravikart</a>
      </div>

      <div className="navbar_right">
        <div className="navbar_search">
          <input placeholder="Search Here...." />
          <Button text="search"/>
        </div>
        {ShowHomeButton === false ? (
        " "
      ) : (
        <p onClick={goToHomePage}>Home</p> 
      )}


        <p onClick={goToOrdersPage}>Orders</p>
        <p onClick={goToKartPage}>My Kart</p>
        {ShowSignInButton === false ? (
        " "
      ) : (
        <Button text="Sign In" onClicking={goToSignInPage} />
      )}
      </div>
    </div>
  );
}

export default NavBar;





 
