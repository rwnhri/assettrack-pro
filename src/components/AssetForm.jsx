import React, { useState, useEffect } from "react";

function AssetForm({ onAddAsset, onUpdateAsset, editingAsset, clearEdit }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    type: "Laptop",
    location: "",
    status: "Available",
  });

  useEffect(() => {
    if (editingAsset) {
      setFormData({
        id: editingAsset.id,
        name: editingAsset.name,
        type: editingAsset.type,
        location: editingAsset.location,
        status: editingAsset.status,
      });
    } else {
      setFormData({
        id: "",
        name: "",
        type: "Laptop",
        location: "",
        status: "Available",
      });
    }
  }, [editingAsset]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.id.trim() === "" ||
      formData.name.trim() === "" ||
      formData.location.trim() === ""
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    if (editingAsset) {
      onUpdateAsset(formData);
    } else {
      onAddAsset(formData);
    }

    setFormData({
      id: "",
      name: "",
      type: "Laptop",
      location: "",
      status: "Available",
    });

    if (clearEdit) {
      clearEdit();
    }
  };

  return (
    <div className="asset-form-container">
      <h2>{editingAsset ? "Edit Asset" : "Add New Asset"}</h2>

      <form onSubmit={handleSubmit} className="asset-form">
        <div>
          <label>Asset ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter asset ID"
          />
        </div>

        <div>
          <label>Asset Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter asset name"
          />
        </div>

        <div>
          <label>Asset Type:</label>
          <select name="type" value={formData.type} onChange={handleChange}>
            <option value="Laptop">Laptop</option>
            <option value="Printer">Printer</option>
            <option value="Projector">Projector</option>
          </select>
        </div>

        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </div>

        <div>
          <label>Status:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Available">Available</option>
            <option value="In Use">In Use</option>
            <option value="Under Maintenance">Under Maintenance</option>
            <option value="Retired">Retired</option>
          </select>
        </div>

        <button type="submit">
          {editingAsset ? "Update Asset" : "Add Asset"}
        </button>

        {editingAsset && (
          <button
            type="button"
            onClick={() => {
              setFormData({
                id: "",
                name: "",
                type: "Laptop",
                location: "",
                status: "Available",
              });
              clearEdit();
            }}
            style={{ marginLeft: "10px" }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default AssetForm;