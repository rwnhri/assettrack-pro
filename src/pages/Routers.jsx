import { useState, useEffect } from "react";
import RouterForm from "../components/RouterForm";
import RouterList from "../components/RouterList";

const API = "http://localhost:8080/routers";

function Routers() {
  const [routers, setRouters] = useState([]);
  const [editingRouter, setEditingRouter] = useState(null);

  const loadRouters = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setRouters(data))
      .catch((err) => console.error("Failed to load routers:", err));
  };

  useEffect(() => {
    loadRouters();
  }, []);

  const handleAddRouter = (newRouter) => {
    fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRouter),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add router");
        return res.json();
      })
      .then(() => {
        loadRouters();
        alert("Router added successfully!");
      })
      .catch((err) => alert("Add failed: " + err.message));
  };

  const handleUpdateRouter = (updatedRouter) => {
    fetch(`${API}/${updatedRouter.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedRouter),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Router not found");
        return res.json();
      })
      .then(() => {
        loadRouters();
        setEditingRouter(null);
        alert("Router updated successfully!");
      })
      .catch((err) => alert("Update failed: " + err.message));
  };

  const handleDeleteRouter = (id) => {
    fetch(`${API}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to delete router");
        loadRouters();
        alert("Router deleted successfully!");
      })
      .catch((err) => alert("Delete failed: " + err.message));
  };

  return (
    <div className="page">
      <RouterForm
        onAddRouter={handleAddRouter}
        onUpdateRouter={handleUpdateRouter}
        editingRouter={editingRouter}
        clearEdit={() => setEditingRouter(null)}
      />

      <div className="card">
        <h2>Routers</h2>
        <RouterList
          routers={routers}
          onDelete={handleDeleteRouter}
          onEdit={(router) => setEditingRouter(router)}
        />
      </div>
    </div>
  );
}

export default Routers;
