import { useState, useEffect } from "react";
import AssetForm from "../components/AssetForm";
import AssetList from "../components/AssetList";

const API = "http://localhost:8080/assets";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [editingAsset, setEditingAsset] = useState(null);

  const loadAssets = () => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setAssets(data))
      .catch((err) => console.error("Failed to load assets:", err));
  };

  useEffect(() => {
    loadAssets();
  }, []);

  // PERSON 1 
const handleAddAsset = (newAsset) => {
  fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newAsset),
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to add asset");
      return res.json();
    })
    .then(() => {
      loadAssets();
      alert("Asset added successfully!");
    })
    .catch((err) => alert("Add failed: " + err.message));
};

  // PERSON 3 
  const handleUpdateAsset = (updatedAsset) => {
    fetch(`${API}/${updatedAsset.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedAsset),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Asset not found");
        return res.json();
      })
      .then(() => {
        loadAssets();
        setEditingAsset(null);
        alert("Asset updated successfully!");
      })
      .catch((err) => alert("Update failed: " + err.message));
  };

  // PERSON 4  
const handleDeleteAsset = (id) => {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) throw new Error("Failed to delete asset");
      loadAssets();
      alert("Asset deleted successfully!");
    })
    .catch((err) => alert("Delete failed: " + err.message));
};

  const handleEditAsset = (asset) => {
    setEditingAsset(asset);
  };

  return (
    <div className="page">
      <AssetForm
        onAddAsset={handleAddAsset}
        onUpdateAsset={handleUpdateAsset}
        editingAsset={editingAsset}
        clearEdit={() => setEditingAsset(null)}
      />
      <div className="card">
        <h2>IT Hardware Assets</h2>
        <AssetList
          assets={assets}
          onDelete={handleDeleteAsset}
          onEdit={handleEditAsset}
        />
      </div>
    </div>
  );
}

export default Assets;