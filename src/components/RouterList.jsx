function RouterList({ routers, onDelete, onEdit }) {
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
        {routers.map((router) => (
          <tr key={router.id}>
            <td>{router.id}</td>
            <td>{router.name}</td>
            <td>{router.location}</td>
            <td>{router.status}</td>
            <td>
              <button onClick={() => onEdit(router)}>Edit</button>
              <button onClick={() => onDelete(router.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RouterList;
