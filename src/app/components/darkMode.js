import { Moon, Sun } from "lucide-react";

export default function DarkMode ({darkMode, setDarkMode}){
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
      };
    return(
        <div>
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
    )
}