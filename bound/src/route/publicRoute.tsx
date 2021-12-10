import { Navigate } from "react-router-dom";
import * as React from "react";

type PublicRouteProps = {
    component: any
    path?: string
}

const PublicRoute=({component:RouteComponent, path}:PublicRouteProps)=>{
    const token = localStorage.getItem("chat-auth");
    if (token===null){return <RouteComponent />}
    return <Navigate to="/home"/>
}
export default PublicRoute