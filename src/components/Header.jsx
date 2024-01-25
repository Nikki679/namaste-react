import { useEffect, useState,useContext } from "react";
import { Link } from 'react-router-dom';
import { LOGO_URL } from "../../utils/common";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus = useOnlineStatus();

 const {loggedInUser} = useContext(UserContext);

 const cartItems = useSelector((store) => store.cart.items)
 console.log("useSelector",cartItems);

  useEffect(() => {
    console.log("useEffect called")
  },[buttonName])

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logoContainer">
        <img className="w-40" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center p-4 m-4">
        <ul className="flex">
          <li className="px-4">Online status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 font-bold"><Link to="/cart">Cart({cartItems.length})</Link></li>
          <button
            className="login-btn"
            onClick={() =>
                {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login")
                }
            }
          >
            {buttonName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
