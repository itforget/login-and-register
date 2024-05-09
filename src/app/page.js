"use client";
import { UserCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { auth} from "./utils/auth.js";
import removeCookie from "./utils/removeCookie.js";
import { goToPages } from "./utils/authPages.js";
import DarkMode from "./components/darkMode.js";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [nomeDeUsuario, setNomeDeUsuario] = useState(null);
  const [userAuth, setUserAuth] = useState(false);
  useEffect(() => {
    async function getNomeDeUsuario() {
      const nome = await auth();
      const authUser = await auth();
      setNomeDeUsuario(nome);
      setUserAuth(authUser);
    }
    getNomeDeUsuario();
  }, []);
  return (
    <main className={`flex min-h-screen h-auto w-auto flex-col p-3 border-2 border-zinc-800 rounded-xl ${darkMode ? "bg-gray-900 text-white" : "bg-[var(--foreground-rgb: 0, 0, 0, --background-start-rgb: 214, 219, 220 ,--background-end-rgb: 255, 255, 255)] text-black"}`}>
      <nav className="flex flex-row  justify-between">
        <a className="flex items-center mr-4 gap-1 cursor-pointer">
          <span className="text-xl font-bold">
            {nomeDeUsuario? nomeDeUsuario : "Profile"}
          </span>

          <span>
            <UserCircle />
          </span>
        </a>
       <div className="flex flex-row gap-4 items-center">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
       <button
          onClick={removeCookie}
          className={`text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2 ${userAuth ? "" : "hidden"}`}>
          Logout
        </button>
       </div>
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
            onClick={() => goToPages("private")}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Go to private page
          </button>
        </div>
      </div>
    </main>
  );
}
