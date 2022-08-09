import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointment from "./Pages/Appointment/Appointment/Appointment";
import AddDoctor from "./Pages/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import Home from "./Pages/Home/Home/Home";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment />
                </PrivateRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route index element={<DashboardHome></DashboardHome>}></Route>
              <Route path="makeadmin" element={
              <AdminRoute><MakeAdmin/></AdminRoute>}></Route>
              <Route path="adddoctor" element={<AdminRoute><AddDoctor/></AdminRoute>}></Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
