"use client";
import React, { useState } from "react";
import axios from "axios";
import { HomeIcon } from "lucide-react";

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
        "https://server-it.vercel.app/users",
        { email, password, name, nickname, birthday }
      );
    } catch (error) {
      console.error("Error during registration:", error);
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
      <form
        className="flex flex-col gap-4 border-2 border-zinc-800 rounded-xl p-12 items-center"
        onSubmit={handleSubmit}
      >
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
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Nickname"
          required
        />
        <input
          className="p-4"
          type="date"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          placeholder="Birthday"
          required
        />
        <button
          className="font-bold bg-zinc-800 text-zinc-200 rounded-xl p-2 hover:bg-zinc-400"
          type="submit"
        >
          Register
        </button>
      </form>
    </div>
  );
}
