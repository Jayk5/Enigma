import "./App.css";
import { Route, Routes } from "react-router-dom";

import Album from "./components/Album";
import SignIn from "./components/Login";
import SignUp from "./components/Signup";
import HospSignup from "./components/hospital/HospSignup";
import HospLogIn from "./components/hospital/HospLogIn";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Album />} />
            <Route path="/login" exact element={<SignIn />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/hospsignup" exact element={<HospSignup />} />
            <Route path="/hosplogin" exact element={<HospLogIn />} />
        </Routes>
    );
}

export default App;
