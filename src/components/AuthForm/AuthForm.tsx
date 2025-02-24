import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../authSlice";
import "./AuthForm.css";
const AuthForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  async function mockLoginRequest(
    email: string,
    password: string
  ): Promise<{ status: number; message: string }> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "secret123") {
          resolve({ status: 200, message: "Login successful" });
        } else {
          reject({ status: 401, message: "Invalid credentials" });
        }
      }, 800);
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      await mockLoginRequest(email, password);
      dispatch(login(email));
      navigate("/dashboard");
    } catch (error) {
      if (error && typeof error === "object" && "message" in error) {
        setErrorMsg((error as { message: string }).message);
      } else {
        setErrorMsg("Something went wrong");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1 className="auth-form__title">Log in</h1>

      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        minLength={4}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">{"Log In"}</button>
      <p role="alert" className="alert">
        {errorMsg ? errorMsg : ""}
      </p>
    </form>
  );
};
export default AuthForm;
