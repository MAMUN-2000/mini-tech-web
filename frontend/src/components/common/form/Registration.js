import React, { useState } from "react";
import { useStudentRegistrationMutation } from "../../../features/auth/authAPI";
import Submit from "../buttons/Submit";
import Error from "../ui/error/Error";
import TextInput from "./TextInput";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [anyError, setAnyError] = useState("");
  const [studentRegistration, { isLoading }] = useStudentRegistrationMutation();

  const handleForm = (e) => {
    e.preventDefault();
    setAnyError(false);

    const formData = {
      name,
      email,
      password,
      role: "student",
    };
    if (password === confirmPassword) {
      studentRegistration(formData);
    } else {
      setAnyError("Password not match !");
    }
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleForm}>
      <div className="rounded-md shadow-sm -space-y-px">
        <TextInput
          title="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <TextInput
          title="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <Submit title="Create Account" disabled={isLoading} />
      {anyError !== "" && <Error msg={anyError} />}
    </form>
  );
}

export default Registration;
