import Layout from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </UserProvider>
  );
}
