import { useState } from "react";
import AssetList from "../components/AssetList";

function Assets() {
  const [assets, setAssets] = useState([
    {
      id: 1,
      name: "Laptop",
      type: "Electronics",
      location: "Riyadh",
      status: "Available",
    },
    {
      id: 2,
      name: "Projector",
      type: "Equipment",
      location: "Meeting Room",
      status: "In Use",
    },
  ]);

  const [selectedAsset, setSelectedAsset] = useState(null);

  const handleDelete = (id) => {
    const updatedAssets = assets.filter((asset) => asset.id !== id);
    setAssets(updatedAssets);
  };

  const handleEdit = (asset) => {
    setSelectedAsset(asset);
    console.log("Selected for editing:", asset);
  };

  return (
    <div>
      <h2>Assets</h2>

      <AssetList
        assets={assets}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default Assets;

- [ ] 
