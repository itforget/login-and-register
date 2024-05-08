export default function Private (){
    return(
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <nav className="flex flex-row ">
        <button className="text-xl font-bold flex flex-row items-center p-3 border-2 border-zinc-800 rounded-xl hover:bg-zinc-800 mb-2">
            Logout
          </button>
        </nav>
      <h1>Welcome to the Private Page</h1>
      <p>This is a private page accessible only to authenticated users.</p>
    </div>
    )
}