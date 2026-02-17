import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    api.get("/auth/dashboard", {
      headers: {
        Authorization: token
      }
    }).then(res => setMsg(res.data.msg));
  }, []);

  return (
    <h1>{msg}</h1>
  );
}
