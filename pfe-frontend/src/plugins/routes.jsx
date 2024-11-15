import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "../pages/login";
import Dashboard from "../layouts/dashboardLayout";
import Home from "../components/home";
import UsersManagement from "../components/usersManagement";
import SubjectsProposal from "../components/subjectsProposal";
import SubjectsValidation from "../components/subjectsValidation";
import DefenseSchedule from "../components/defenseSchedule";
 import DefenseManagement from "../components/defenseManagement";
 import Settings from "../components/settings";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="usersManagement" element={<UsersManagement />} />
          <Route path="subjectsProposal" element={<SubjectsProposal />} />
          <Route path="subjectsValidation" element={<SubjectsValidation />} />
          <Route path="defenseSchedule" element={<DefenseSchedule />} />
          <Route path="defenseManagement" element={<DefenseManagement />} />
          <Route path="settings" element={<Settings />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
