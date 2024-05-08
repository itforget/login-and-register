'use client'
import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://5000-itforget-serverit-zgvwm7xo85i.ws-us110.gitpod.io/users",
        { email, password, name, nickname, birthday }
      );
      // Lógica para redirecionar para a página de login ou exibir uma mensagem de sucesso
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Register</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
          required
        />
        <input
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="Birthday"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
