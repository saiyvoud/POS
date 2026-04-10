import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import MainLayout from "./layout/mainLayout";
import RouterPath from "./router/router";
import { ThemeProvider } from "./config/theme/ThemeContext";
function App() {
  const [count, setCount] = useState(0);
  return (
    <ThemeProvider>
      <RouterPath />
    </ThemeProvider>
  );
}

export default App;
