// import learningPortal from ' '

import { useEffect, useState } from "react";
import TextInput from "./TextInput";
import Submit from "../buttons/Submit";
import { Link, useNavigate } from "react-router-dom";
import { useStudentLoginMutation } from "../../../features/auth/authAPI";
import Error from "../ui/error/Error";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [anyError, setAnyError] = useState("");
  const navigate = useNavigate();

  const [studentLogin, { isLoading, error, data }] = useStudentLoginMutation();

  const handleForm = (e) => {
    e.preventDefault();
    setAnyError(false);

    const formData = {
      email,
      password,
    };
    studentLogin(formData);
  };
  useEffect(() => {
    if (data?.accessToken && data?.user && data?.user?.role !== "admin") {
      navigate("/course-player");
    } else if (
      data?.accessToken &&
      data?.user &&
      data?.user?.role === "admin"
    ) {
      navigate("/admin");
    } else if (error?.data) {
      setAnyError(error?.data);
    }
  }, [error, navigate, data]);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleForm}>
      <div className="rounded-md shadow-sm -space-y-px">
        <TextInput
          title="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          title="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm">
          <Link
            to="/register"
            className="font-medium text-violet-600 hover:text-violet-500"
          >
            Create New Account
          </Link>
        </div>
        <div className="text-sm">
          <a
            href="./StudentReistration.html"
            className="font-medium text-violet-600 hover:text-violet-500"
          >
            Forgot password?
          </a>
        </div>
      </div>

      <Submit title="Sign in" disabled={isLoading} />
      {anyError !== "" && <Error msg={anyError} />}
    </form>
  );
}

export default Login;
