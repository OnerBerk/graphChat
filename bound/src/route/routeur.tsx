import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import CustomForm from "../componet-UI/form/form";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./publicRoute";
import Chat from "../pages/chat";
import Contact from "../pages/contact";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicRoute component={CustomForm} /> }/>
            <Route path="/home" element={<ProtectedRoute component={Dashboard} />} />
            <Route path="/chat" element={<ProtectedRoute component={Chat} />} />
            <Route path="/contact" element={<ProtectedRoute component={Contact} />} />
        </Routes>
    );
};

export default Router;