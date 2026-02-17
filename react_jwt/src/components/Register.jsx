import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async e => {
    e.preventDefault();

    await api.post("/auth/register", {
      name,
      email,
      password
    });

    alert("Registered Successfully");
    navigate("/");
  };

  return (
    <form onSubmit={submit}>
      <h2>Register</h2>

      <input placeholder="Name" onChange={e => setName(e.target.value)} />
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button>Register</button>
    </form>
  );
}
