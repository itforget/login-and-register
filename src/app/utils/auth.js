import axios from "axios";

export async function auth() {
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

    console.log("Usuário autenticado!");
    const name = response.data.user.name;
    return name;
  } catch (error) {
    console.error("Usuário não autenticado!");
  }
}
