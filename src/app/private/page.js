"use client";
import removeCookie from "../utils/removeCookie";

export default function Private() {
  return (
    <div className="flex min-h-screen flex-col">
      <nav className="flex flex-row justify-start h-auto w-screen p-3"> 
        <button
          onClick={removeCookie}
          className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2"
        >
          Logout
        </button>
      </nav>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-xl font-bold">Welcome to the Private Page</h1>
        <p>This is a private page accessible only to authenticated users.</p>
      </div>
    </div>
  );
}
