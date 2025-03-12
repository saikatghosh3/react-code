import { createContext, useState, useEffect } from "react";

// Step 1: Create Context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Step 2: State for Dark Mode (with LocalStorage)
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  // Step 3: Save to Local Storage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Step 4: Function to Toggle Theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
