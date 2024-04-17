import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Mainroutes from "./routes/Mainroutes";

import ThemeContext from "./context/ThemeContext";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const userTheme = localStorage.getItem("app-theme");
    if (userTheme != null) {
      setTheme(userTheme);
    }
  }, []);
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div id="app-wrapper" data-theme={theme}>
          <Navbar />
          <Mainroutes />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
