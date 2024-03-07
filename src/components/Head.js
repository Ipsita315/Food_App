import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Head = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <header className="header">
            <div className="header__logo-container">
                <img className="header__logo" src={LOGO_URL} />
            </div>
            <div className="header__nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact US</Link></li>
                    <li>Cart</li>
                    <li className="login-btn-section">
                        <button className="login-btn" onClick={()=>{
                            let btnText = loginBtn === "Login" ? "Logout" : "Login";
                            setLoginBtn(btnText);
                        }}>{loginBtn}</button>
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Head;