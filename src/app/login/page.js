'use client'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://5000-itforget-serverit-zgvwm7xo85i.ws-us110.gitpod.io/auth/login",
        { email, password }
      );
      const id = response.data.userId;
      const token = response.data.token;
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);

      const auth = await axios.get(
        `https://5000-itforget-serverit-zgvwm7xo85i.ws-us110.gitpod.io/user/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (auth === null) {
        alert("Usuário não encontrado!");
        window.location.href = "/";
      } else {
        alert("Login realizado com sucesso!");
        window.location.href = "/";
      }
    } catch (error) {
      setError("Usuário ou senha inválidos!");
    }
  };

    return (
        <div className='flex min-h-screen flex-col items-center justify-center p-3'>
            <h1>Login</h1>
            {error && <p>{error}</p>}
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};


