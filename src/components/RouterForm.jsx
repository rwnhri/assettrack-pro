import React, { useState, useEffect } from "react";
import "./AssetForm.css";

function RouterForm({ onAddRouter, onUpdateRouter, editingRouter, clearEdit }) {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
    status: "Available",
  });

  useEffect(() => {
    if (editingRouter) {
      setFormData({
        id: editingRouter.id,
        name: editingRouter.name,
        location: editingRouter.location,
        status: editingRouter.status,
      });
    } else {
      setFormData({ id: "", name: "", location: "", status: "Available" });
    }
  }, [editingRouter]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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

    if (editingRouter) {
      onUpdateRouter(formData);
    } else {
      onAddRouter(formData);
    }

    setFormData({ id: "", name: "", location: "", status: "Available" });
    if (clearEdit) clearEdit();
  };

  return (
    <div className="asset-form-container">
      <h2>{editingRouter ? "Edit Router" : "Add New Router"}</h2>

      <form onSubmit={handleSubmit} className="asset-form">
        <div>
          <label>Router ID:</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="Enter router ID"
          />
        </div>

        <div>
          <label>Router Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter router name"
          />
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
          {editingRouter ? "Update Router" : "Add Router"}
        </button>

        {editingRouter && (
          <button
            type="button"
            onClick={() => {
              setFormData({
                id: "",
                name: "",
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

export default RouterForm;
