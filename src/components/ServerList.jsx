function ServerList({ servers, onDelete, onEdit }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Location</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {servers.map((server) => (
          <tr key={server.id}>
            <td>{server.id}</td>
            <td>{server.name}</td>
            <td>{server.location}</td>
            <td>{server.status}</td>
            <td>
              <button onClick={() => onEdit(server)}>Edit</button>
              <button onClick={() => onDelete(server.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ServerList;