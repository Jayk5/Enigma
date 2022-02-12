import "./App.css";
import { Route, Routes } from "react-router-dom";

import Album from "./components/Album";
import SignIn from "./components/Login";
import SignUp from "./components/Signup";
import HospSignup from "./components/hospital/HospSignup";
import HospLogIn from "./components/hospital/HospLogIn";
import HospitalCard from "./components/HospitalView/HospitalCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Album />} />
      <Route path="/login" exact element={<SignIn />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/hospsignup" exact element={<HospSignup />} />
      <Route path="/hosplogin" exact element={<HospLogIn />} />
      <Route path="/hospital/dashboard" exact element={<HospitalCard />} />
    </Routes>
  );
}

export default App;
