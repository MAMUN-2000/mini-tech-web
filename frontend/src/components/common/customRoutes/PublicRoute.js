import { Navigate } from "react-router-dom";
import useAuth from "../../../hooks/authForRoutes/useAuth";
import useCheckIsAdmin from "../../../hooks/authForRoutes/useCheckAdmin";

function PublicRoute({ children }) {
  const isLoggedIn = useAuth();
  const admin = useCheckIsAdmin();

  if (!isLoggedIn && !admin) {
    return children;
  } else if (isLoggedIn && !admin) {
    return <Navigate to="/course-player" />;
  } else if (!isLoggedIn && admin) {
    return <Navigate to="/admin" />;
  }
}

export default PublicRoute;
