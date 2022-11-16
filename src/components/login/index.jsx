import React from "react";
import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { login } from "../../store/features/loginData";

function Login() {
    const dispatch = useDispatch();
    const [loginCreds, setLoginCreds] = useState({ email: "", pword: "" });

    function changeHandler(e) {
        setLoginCreds({ ...loginCreds, [e.target.name]: e.target.value });
    }

    function submitHandler(e) {
        e.preventDefault();
        if (
            loginCreds.email === "nivasreddy@gmail.com" &&
            loginCreds.pword === "123456"
        ) {
            dispatch(login());
            setLoginCreds({ email: "", pword: "" });
        }
    }

    return (
        <form
            action=""
            method="post"
            className="login-form"
            onSubmit={submitHandler}
        >
            <div className="login-form__input email">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={loginCreds.email}
                    onChange={changeHandler}
                />
            </div>
            <div className="login-form__input password">
                <label htmlFor="pword">Password</label>
                <input
                    type="password"
                    name="pword"
                    id="pword"
                    value={loginCreds.pword}
                    onChange={changeHandler}
                />
            </div>
            <input type="submit" value="Login" />
        </form>
    );
}

export default Login;
