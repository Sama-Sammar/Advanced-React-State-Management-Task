import { useState } from "react";
import Layout from "./components/Layout";

export default function App() {
  const [user, setUser] = useState({ name: "Sama", email: "sama@test.com" });
  const [theme, setTheme] = useState("light"); // light | dark
  const [notifications, setNotifications] = useState(3);

  return (
    <Layout user={user} theme={theme} notifications={notifications} />
  );
}
