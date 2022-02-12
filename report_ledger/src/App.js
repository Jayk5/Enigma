import "./App.css";
import { Route, Routes } from "react-router-dom";

import Album from "./components/Album";
import SignIn from "./components/Login";
import PatientData from "./components/PatientData";
import HospSignup from "./components/hospital/HospSignup";
import HospLogIn from "./components/hospital/HospLogIn";
import UserCard from "./components/users/userview/UserCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Album />} />
      <Route path="/login" exact element={<SignIn />} />
      <Route path="/patientdata" exact element={<PatientData />} />
      <Route path="/hospsignup" exact element={<HospSignup />} />
      <Route path="/hosplogin" exact element={<HospLogIn />} />
      <Route path="/patient" exact element={<UserCard />} />
    </Routes>
  );
}

export default App;
