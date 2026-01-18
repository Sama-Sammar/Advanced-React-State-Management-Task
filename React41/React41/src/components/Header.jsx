import UserInfo from "./UserInfo";

export default function Header({ user, theme, notifications }) {
  return (
    <header>
      <h2>User Dashboard Application </h2>
      <UserInfo user={user} theme={theme} notifications={notifications} />
    </header>
  );
}
