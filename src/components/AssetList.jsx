function AssetList({ assets, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {assets.map((asset) => (
          <tr key={asset.id}>
            <td>{asset.id}</td>
            <td>{asset.name}</td>
            <td>{asset.type}</td>
            <td>{asset.location}</td>
            <td>{asset.status}</td>
            <td>
              <button onClick={() => onEdit(asset)}>Edit</button>
              <button onClick={() => onDelete(asset.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default AssetList;
