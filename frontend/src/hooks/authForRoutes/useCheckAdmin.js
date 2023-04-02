import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/seletorAuth";

function useCheckIsAdmin() {
  const { accessToken, user } = useSelector(selectAuth);

  if (accessToken && user?.role === "admin") {
    return true;
  } else return false;
}
export default useCheckIsAdmin;
