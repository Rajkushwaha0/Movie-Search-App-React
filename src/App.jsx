import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Mainroutes from "./routes/Mainroutes";

import ThemeContext from "./context/ThemeContext";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
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
