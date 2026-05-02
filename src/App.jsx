import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Assets from "./pages/Assets.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function App() {
  const [assets, setAssets] = useState([]);

  // GET all assets
  useEffect(() => {
    fetch("http://localhost:8080/assets")
      .then(res => res.json())
      .then(data => setAssets(data));
  }, []);

  // DELETE asset
  const deleteAsset = (id) => {
    fetch(`http://localhost:8080/assets/${id}`, {
      method: "DELETE"
    }).then(() => {
      setAssets(prev => prev.filter(a => a.id !== id));
    });
  };

  return (
    <div>
      <h1>Assets List</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Location</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {assets.map(asset => (
            <tr key={asset.id}>
              <td>{asset.name}</td>
              <td>{asset.type}</td>
              <td>{asset.location}</td>
              <td>{asset.status}</td>
              <td>
                <button onClick={() => deleteAsset(asset.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
