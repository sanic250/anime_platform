import React from "react";
import { useState } from "react";
import { login, setAuthToken } from "../services/api";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import useAuthStore from "../services/useAtuhStore.js";
import styles from "./styles/login.module.css";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { isLoggedIn, login } = useAuthStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setAuthToken(data.token);
      login({ token: data.token, user: data.user });
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Błąd logowania");
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.labels} htmlFor="email">
            Email
            <input
              value={email}
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className={styles.labels} htmlFor="password">
            Password
            <input
              value={password}
              type="password"
              placeholder="Password.."
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.btnLogin}>
            Login
          </button>
          <p className={styles.bottomLink}>
            Are You dont have an acount?<a href="/Register">Register</a>{" "}
          </p>
          <p>
            <Link className={styles.bottomLink} to="/">Home Page</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
