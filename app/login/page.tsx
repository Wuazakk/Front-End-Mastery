"use client";
import React, { useCallback, useState } from "react";

export default function Login() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <h1>Hola</h1>
      <form
        id="login-form"
        onSubmit={handleSubmit}
        action="/api/login"
        method="post"
      >
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" required style={{ color: "black" }} />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          required
          style={{ color: "black" }}
        />
        <label htmlFor="passCheckBox">Remember Password</label>
        <input id="passCheckBox" type="checkbox" style={{ color: "black" }} />
        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </main>
  );
}
