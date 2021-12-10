import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import CustomForm from "../componet-UI/form/form";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./publicRoute";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute component={CustomForm} /> }/>
            <Route path="/home" element={<ProtectedRoute component={Dashboard} />} />
        </Routes>
    );
};

export default Router;