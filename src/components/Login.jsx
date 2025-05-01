import React from "react";
import { useState } from "react";
import { login, setAuthToken } from "../services/api";
import axios from "axios";
import styles from "./styles/login.module.css";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      setAuthToken(data.token);
      setError("");
      alert("Zalogowano pomyślnie");
    } catch (err) {
      setError(err.response?.data?.message || "Błąd logowania");
    }
  };

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
        </form>
      </div>
    </div>
  );
};

export default Login;
