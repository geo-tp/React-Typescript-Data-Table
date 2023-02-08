export const DataTableRow = (props: {
  row: { [keys: string]: string | number };
  changeDropDownState: Function;
  dropDownIsOpen: boolean;
  index: number;
}) => {
  const values = Object.values(props.row);

  return (
    <tr
      onClick={() => props.changeDropDownState(props.index)}
      className="datatable-row"
      data-testid="datatable-row"
    >
      {values.slice(0, 5).map((value, index) => (
        <td key={`datable-row-${index}`}>
          {index === 0 && (
            <i
              className={`datatable-row__${
                props.dropDownIsOpen ? "fold" : "unfold"
              } fa fa-${props.dropDownIsOpen ? "minus" : "plus"}-circle`}
            ></i>
          )}
          {value}
        </td>
      ))}
    </tr>
  );
};
