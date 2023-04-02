import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/seletorAuth";

function useAuth() {
  const { accessToken, user } = useSelector(selectAuth);
  if (accessToken && user?.role === "student") return true;
  else return false;
}

export default useAuth;
