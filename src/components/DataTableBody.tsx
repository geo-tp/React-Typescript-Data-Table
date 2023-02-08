import { useEffect, useState } from "react";
import { DatabatableDropDown } from "./DataTableDropDown";
import { DataTableRow } from "./DataTableRow";

export const DataTableBody = (props: { dataset: any[] }) => {
  const [openedDropDowns, setOpenedDropDowns] = useState<number[]>([]);

  // Close dropdown if props.dataset get updated
  useEffect(() => {
    setOpenedDropDowns([]);
  }, [props.dataset]);

  // Open/close dropdown depending on its actual state
  const changeDropDownState = (index: number) => {
    if (!openedDropDowns.includes(index)) {
      setOpenedDropDowns([...openedDropDowns, index]);
    } else {
      setOpenedDropDowns(openedDropDowns.filter((e) => e !== index));
    }
  };

  return (
    <tbody className="datatable-body">
      {props.dataset.map((row, index) => {
        const dropDownIsOpen = openedDropDowns.includes(index);

        const components = [
          <DataTableRow
            key={`datatable-row-${index}`}
            row={row}
            changeDropDownState={changeDropDownState}
            index={index}
            dropDownIsOpen={dropDownIsOpen}
          />,
        ];

        // if index is in list, dropdown must be displayed
        if (dropDownIsOpen) {
          components.push(
            <DatabatableDropDown
              key={`datatable-row-dropdown-${index}`}
              row={row}
            />
          );
        }

        return components;
      })}

      {props.dataset.length === 0 && (
        <tr className="datable-body__no-results">
          <td colSpan={5}>No matching records found</td>
        </tr>
      )}
    </tbody>
  );
};
