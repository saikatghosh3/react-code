import { useContext } from "react";
import { ThemeContext } from "../ThemeProvider"; // Import ThemeContext

function ThemeToggle() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ marginTop: "20px", padding: "10px" }}>
      {darkMode ? "🌙 Switch to Light Mode" : "☀️ Switch to Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
