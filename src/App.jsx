import Navbar from "./components/navbar";
import "./App.css";

function App() {
    return (
        <>
            <Navbar userLogin={true} type={"User"}></Navbar>
        </>
    );
}

export default App;
