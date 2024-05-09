import axios from "axios";
export async function goToPages(page) {
    try {
        const id = document.cookie
          .split("; ")
          .find((item) => item.startsWith("id="))
          .split("=")[1];
        const token = document.cookie
          .split("; ")
          .find((item) => item.startsWith("token="))
          .split("=")[1];
    
        const response = await axios.get(
          `https://server-it.vercel.app/user/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        window.location.href = `/${page}`;
      } catch (error) {
        alert("Usuário não autenticado!");
        return null; 
      }
}
