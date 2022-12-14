import Navbar from "./components/navbar";
import Home from "./components/home";
import Login from "./components/login";
import "./App.css";
import { useSelector } from "react-redux";
// import { login } from "./store/features/loginData";

function App() {
    const loginDetails = useSelector((state) => state.login);

    return (
        <>
            <Navbar
                userLogin={loginDetails.login}
                type={loginDetails.type}
                username={loginDetails.username}
            />
            {/* <Home /> */}
            <Login />
        </>
    );
}

export default App;
