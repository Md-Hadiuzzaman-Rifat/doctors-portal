import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./components/Appoointment/Appointment/Appointment";
import Booking from "./components/Booking/Booking";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AuthProvider from "./hooks/useAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Home></Home>
        <Routes>
          <Route path="/" element={<Appointment></Appointment>}></Route>
          <Route path="/home" element={<Appointment></Appointment>}></Route>
          <Route path="/booking" element={<Booking></Booking>}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}
export default App;
