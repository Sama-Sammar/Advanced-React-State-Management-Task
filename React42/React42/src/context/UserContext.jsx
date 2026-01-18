import { createContext, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Sama", email: "sama@test.com" });
  const [notifications, setNotifications] = useState(3);

  return (
    <UserContext.Provider value={{ user, setUser, notifications, setNotifications }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
