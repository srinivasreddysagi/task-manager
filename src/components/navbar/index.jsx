import React from "react";
import "./styles.css";
import noprofile from "../../assets/profile-default.png";
import { useDispatch } from "react-redux";
import { changeMode, logout, login } from "../../store/features/loginData";

function Navbar({ userLogin, type, username }) {
    const dispatch = useDispatch();

    if (userLogin) {
        return (
            <header className="navbar">
                <div className="navbar__user">
                    <img
                        src={noprofile}
                        alt="default DP"
                        className="navbar__user-dp"
                    />
                    <h4 className="navbar__user-name">{username}</h4>
                </div>

                <div className="navbar__modes">
                    <button
                        className={
                            type === "Admin"
                                ? "navbar__modes-ua checked"
                                : "navbar__modes-ua unchecked"
                        }
                        onClick={() => dispatch(changeMode())}
                    >
                        {type}
                    </button>
                    <button
                        className="btn navbar__modes--logout"
                        onClick={() => dispatch(logout())}
                    >
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
                    <button
                        className="btn navbar__modes--login"
                        onClick={() => dispatch(login())}
                    >
                        Login
                    </button>
                </div>
            </header>
        );
    }
}

export default Navbar;
