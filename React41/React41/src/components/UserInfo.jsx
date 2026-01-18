export default function UserInfo({ user, theme, notifications }) {
  return (
    <div>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Theme:</strong> {theme}</p>
      <p><strong>Notifications:</strong> {notifications}</p>
    </div>
  );
}
