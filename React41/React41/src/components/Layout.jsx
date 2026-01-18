import Header from "./Header";

export default function Layout({ user, theme, notifications }) {
  return (
    <div>
      <Header user={user} theme={theme} notifications={notifications} />
    </div>
  );
}
