import "./App.css";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import Mainroutes from "./routes/Mainroutes";

function App() {
  return (
    <>
      <Navbar />
      <Mainroutes />
      <Footer />
    </>
  );
}

export default App;
