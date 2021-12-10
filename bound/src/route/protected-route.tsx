import * as React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    component: any
    path?: string
}

const ProtectedRoute = ({ path, component:RouteComponent}: ProtectedRouteProps) => {
    const token = localStorage.getItem("chat-auth");
    if (token && token.length > 0){return <RouteComponent />}
    return <Navigate to="/"/>
};
export default ProtectedRoute;