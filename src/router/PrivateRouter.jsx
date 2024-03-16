import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import TokenService from "../services/token.service";

const ProtectedRouter = ({ children }) => {
	const location = useLocation();
	const user = TokenService.getUser() || false;
	if (!user) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}
	return children ? children : <Outlet />;
};

export default ProtectedRouter;
