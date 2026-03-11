"use client";

import React, { useState } from "react";

interface LoginForm {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export default function LoginPage() {
  const [formData, setFormData] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log("Login Data:", formData);

    alert("Login Successful");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Login
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "5px 0" }}>{errors.email}</p>
          )}
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              marginTop: "5px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "5px 0" }}>{errors.password}</p>
          )}
        </div>

        <br />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}