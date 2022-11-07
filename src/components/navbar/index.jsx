import React from "react";
import "./styles.css";
import noprofile from "../../assets/profile-default.png";
// import ToggleButton from "../toggle-button";

function Navbar({ userLogin, type }) {
    if (userLogin) {
        return (
            <header className="navbar">
                <div className="navbar__user">
                    <img
                        src={noprofile}
                        alt="default DP"
                        className="navbar__user-dp"
                    />
                    <h4 className="navbar__user-name">Nivas Reddy</h4>
                </div>

                <div className="navbar__modes">
                    {/* <ToggleButton name="ua" id="ua" toggleA="User" toggleB="Admin"/> */}
                    <button
                        className={
                            type === "Admin"
                                ? "navbar__modes-ua checked"
                                : "navbar__modes-ua unchecked"
                        }
                    >
                        {type}
                    </button>
                    <button className="btn navbar__modes--logout">
                        Logout
                    </button>
                </div>
            </header>
        );
    } else {
        return (
            <header className="navbar">
                <h2 className="navbar__brand-name">
                    <span className="navbar__brand-name--first">T</span>ask{" "}
                    <span className="navbar__brand-name--second">M</span>anager
                </h2>
                <div className="navbar__modes">
                    <button className="btn navbar__modes--login">Login</button>
                </div>
            </header>
        );
    }
}

export default Navbar;
