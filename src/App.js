import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <Router>
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-around",
            alignItems: "center",
            margin: "0 auto",
          }}
        >
          <Link to={"/"}>Home</Link>
          <Link to={"/menu"}>Menu</Link>
          <Link to={"/contact"}>Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
