import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { incrementNotifications } from "../store/notificationSlice";
import { updateUserName, fetchUser } from "../store/userSlice";

export default function UserInfo() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.value);
  const notifications = useSelector((state) => state.notifications.count);

  const [newName, setNewName] = useState("");

  const handleUpdateName = () => {
    if (!newName.trim()) return;
    dispatch(updateUserName(newName.trim()));
    setNewName("");
  };

  return (
    <div>
      {/*BONUS: async action button */}
      <button onClick={() => dispatch(fetchUser())}>
        Fetch User (Async)
      </button>
      {/*Show loading state for async action */}
      {user.status === "loading" && <p>Loading user...</p>}

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
      <p><strong>Notifications:</strong> {notifications}</p>
      <button onClick={() => dispatch(incrementNotifications())}>
        + Notification
      </button>
      <div>
        <input
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="New name"
        />
        <button onClick={handleUpdateName}>
          Update Name
        </button>
      </div>
    </div>
  );
}
