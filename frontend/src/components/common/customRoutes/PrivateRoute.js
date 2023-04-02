import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/authForRoutes/useAuth";

function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/" />;
}

export default PrivateRoute;
