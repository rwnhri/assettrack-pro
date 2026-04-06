import { useState } from "react";
import AssetForm from "../components/AssetForm";

function Assets() {
  const [assets, setAssets] = useState([]);
  const [editingAsset, setEditingAsset] = useState(null);

  const handleAddAsset = (newAsset) => {
    setAssets([...assets, newAsset]);
  };

  const handleUpdateAsset = (updatedAsset) => {
    setAssets(
      assets.map((asset) =>
        asset.id === updatedAsset.id ? updatedAsset : asset
      )
    );
    setEditingAsset(null);
  };

  return (
    <div className="page">
      <AssetForm
        onAddAsset={handleAddAsset}
        onUpdateAsset={handleUpdateAsset}
        editingAsset={editingAsset}
        clearEdit={() => setEditingAsset(null)}
      />
    </div>
  );
}

export default Assets;