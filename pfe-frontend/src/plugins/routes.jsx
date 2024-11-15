import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../layouts/dashboardLayout";


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} >
           
        </Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
