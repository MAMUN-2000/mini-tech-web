import { Navigate } from "react-router-dom";
// import useAuth from "../../../hooks/authForRoutes/useAuth";
import useCheckIsAdmin from "../../../hooks/authForRoutes/useCheckAdmin";

function CustomAdimRoute({ children }) {
  const admin = useCheckIsAdmin();
  return admin ? children : <Navigate to={"/"} />;
}

export default CustomAdimRoute;
