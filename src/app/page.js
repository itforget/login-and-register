"use client";
import { UserCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { auth, goToPages} from "./utils/auth.js";
import removeCookie from "./utils/removeCookie.js";


export default function Home() {
  const [nomeDeUsuario, setNomeDeUsuario] = useState(null);

  useEffect(() => {
    async function getNomeDeUsuario() {
      const nome = await auth();
      setNomeDeUsuario(nome);
    }
    getNomeDeUsuario();
  }, []);
 
  return (
    <main className="flex min-h-screen h-auto w-auto flex-col p-3 border-2 border-zinc-800 rounded-xl">
      <nav className="flex flex-row  justify-between">
        <a className="flex items-center mr-4 gap-1 cursor-pointer">
          <span className="text-xl font-bold">
            {nomeDeUsuario? nomeDeUsuario : "Profile"}
          </span>

          <span>
            <UserCircle />
          </span>
        </a>
        <button
          onClick={removeCookie}
          className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2"
        >
          Logout
        </button>
      </nav>

      <div className="text-center items-center flex-col flex justify-center p-24">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg mb-8">Explore our features and services</p>
        <div className="flex gap-4">
          <a
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            LOGIN
          </a>
          <a
            href="/register"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            REGISTER
          </a>
          <button
            onClick={}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Go to private page
          </button>
        </div>
      </div>
    </main>
  );
}
