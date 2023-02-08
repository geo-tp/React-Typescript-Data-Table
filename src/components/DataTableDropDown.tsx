export const DatabatableDropDown = (props: {
  row: {
    [keys: string]: string | number;
  };
}) => {
  const keys = Object.keys(props.row);

  return (
    <tr className="datatable-dropdown" data-testid="datatable-dropdown">
      <td colSpan={4}>
        <ul>
          {keys.map((key, index) => (
            <li key={`datatable-dropdown-${index}`}>
              <span>{key}</span>
              <span>{props.row[key]}</span>
            </li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
