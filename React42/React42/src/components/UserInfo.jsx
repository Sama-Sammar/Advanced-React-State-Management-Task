import { useContext } from "react";
import UserContext from "../context/UserContext";
import ThemeContext from "../context/ThemeContext";

export default function UserInfo() {
  const { user, notifications } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Notifications:</strong> {notifications}</p>
    </div>
  );
}
