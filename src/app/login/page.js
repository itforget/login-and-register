"use client";
import { useState } from "react";
import axios from "axios";
import { HomeIcon } from "lucide-react";
import { auth } from "../utils/auth.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://server-it.vercel.app/auth/login",
        { email, password }
      );
      const id = response.data.userId;
      const token = response.data.token;
      document.cookie = `token=${token}; path=/`;
      document.cookie = `id=${id}; path=/`;
      auth()
      if (response === null) {
        alert("Usuário não encontrado!");
      } else {
        alert("Login realizado com sucesso!");
        window.location.href = "/";
      }
    } catch (error) {
      setError("Usuário ou senha inválidos!", error);
    }
  };

  return (
    <div className="flex min-h-screen h-auto w-auto flex-col p-3 border-2 border-zinc-800 rounded-xl">
     <nav className="flex flex-row justify-between">
      <a className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2" href="/">Home
          <HomeIcon />
        </a>
        <a className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2" href="/register">
            Register
        </a>
     </nav>
      <div className="flex flex-col gap-4 border-2 border-zinc-800 rounded-xl p-12 items-center justify-center">
        <h1 className="text-3xl font-extrabold">Login</h1>
        {error && <p>{error}</p>}
        <div className="flex flex-col gap-6">
          <input
            className="p-4"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="p-4"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="font-bold bg-zinc-800 text-zinc-200 rounded-xl p-2 hover:bg-zinc-400"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
