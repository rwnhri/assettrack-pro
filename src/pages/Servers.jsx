import { useState, useEffect } from "react";
import ServerForm from "../components/ServerForm";
import ServerList from "../components/ServerList";

const API = "http://localhost:8080/servers";

function Servers() {
  const [servers, setServers] = useState([]);
  const [editingServer, setEditingServer] = useState(null);

  const loadServers = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setServers(data))
      .catch((err) => console.error("Failed to load servers:", err));
  };

  useEffect(() => {
    loadServers();
  }, []);

  const handleAddServer = (newServer) => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newServer),
    })
      .then((res) => { if (!res.ok) throw new Error("Failed to add server"); return res.json(); })
      .then(() => { loadServers(); alert("Server added successfully!"); })
      .catch((err) => alert("Add failed: " + err.message));
  };

  const handleUpdateServer = (updatedServer) => {
    fetch(`${API}/${updatedServer.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedServer),
    })
      .then((res) => { if (!res.ok) throw new Error("Server not found"); return res.json(); })
      .then(() => { loadServers(); setEditingServer(null); alert("Server updated successfully!"); })
      .catch((err) => alert("Update failed: " + err.message));
  };

  const handleDeleteServer = (id) => {
    fetch(`${API}/${id}`, { method: "DELETE" })
      .then((res) => { if (!res.ok) throw new Error("Failed to delete server"); loadServers(); alert("Server deleted successfully!"); })
      .catch((err) => alert("Delete failed: " + err.message));
  };

  return (
    <div className="page">
      <ServerForm
        onAddServer={handleAddServer}
        onUpdateServer={handleUpdateServer}
        editingServer={editingServer}
        clearEdit={() => setEditingServer(null)}
      />
      <div className="card">
        <h2>Servers</h2>
        <ServerList
          servers={servers}
          onDelete={handleDeleteServer}
          onEdit={(server) => setEditingServer(server)}
        />
      </div>
    </div>
  );
}

export default Servers;