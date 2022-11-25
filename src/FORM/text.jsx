const TableLists = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.age}</td>
      <td>{props.email}</td>
    </tr>
  );
};

export default TableLists;
