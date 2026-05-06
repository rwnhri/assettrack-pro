import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Assets from "./pages/Assets.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import Servers from "./pages/Servers";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/servers" element={<Servers />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;