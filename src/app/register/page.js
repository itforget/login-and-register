'use client'
import React, { useState } from "react";
import axios from "axios";
import { HomeIcon } from "lucide-react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [msg, setMsg] = useState("");
  const registerUser = async () => {
    try {
      const response = await axios.post("https://server-it.vercel.app/auth/register", {
        name,
        email,
        password,
        confirmpassword,
      });
      const msg = response.data.msg;
      setMsg(msg);
      window.location.href = "/login";
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className="flex min-h-screen h-auto w-auto flex-col p-3 border-2 border-zinc-800 rounded-xl">
      <nav className="flex flex-row justify-between">
        <a
          className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2"
          href="/"
        >
          Home
          <HomeIcon />
        </a>
        <a
          className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2"
          href="/login"
        >
          Login
        </a>
      </nav>
      <div className="flex flex-col gap-4 border-2 border-zinc-800 rounded-xl p-12 items-center">
        <h1 className="text-3xl font-extrabold">Register</h1>
        <input
          className="p-4"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="p-4"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        />
        <input
          className="p-4"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <input
          className="p-4"
          type="password"
          value={confirmpassword}
          onChange={(e) => setConfirmpassword(e.target.value)}
          placeholder="Confirm password"
          required
        />
        <button
          onClick={registerUser}
          className="font-bold bg-zinc-800 text-zinc-200 rounded-xl p-2 hover:bg-zinc-400"
          type="submit"
        >
          Register
        </button>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}
