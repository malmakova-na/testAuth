import React, { useState } from "react";
import "./AuthForm.css";
const AuthForm: React.FC = () => {
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
      const response = await mockLoginRequest(email, password);
      alert(response.message);
    } catch (error) {
      setErrorMsg("Something went wrong");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h1 className="auth-form__title">Sign in</h1>

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
        minLength={6}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {errorMsg && (
        <p role="alert" className="alert">
          {errorMsg}
        </p>
      )}

      <button type="submit">Log in</button>
    </form>
  );
};
export default AuthForm;
