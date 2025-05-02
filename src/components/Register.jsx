"use client";

import React from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./styles/register.module.css";
import { register } from "../services/api";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await register(email, password);
      setSuccess("Rejestracja udana");
      setIsRegistered(true);
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Błąd rejestracji");
      setSuccess("");
    }
  };

  if (isRegistered) {
    return <Navigate to="/Login" replace />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.labels} htmlFor="username">
            Username
            <input
              value={username}
              type="text"
              placeholder="Username.."
              onChange={(e) => setUsername(e.target.value)}
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
          <label className={styles.labels} htmlFor="email">
            Email
            <input
              value={email}
              type="email"
              placeholder="Email..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit" className={styles.btnRegister}>
            Register
          </button>
          <p className={styles.bottomLink}>
            Are You already have an acount?<a href="/Login">Login</a>{" "}
          </p>
          
        </form>
      </div>
    </div>
  );
};

export default Register;
