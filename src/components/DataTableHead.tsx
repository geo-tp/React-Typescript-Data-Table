import { useState } from "react";

export const DataTableHead = (props: {
  namedFields: string[];
  tableFields: string[];
  currentRows: object[];
  setCurrentRows: Function;
}) => {
  const [sortBy, setSortBy] = useState<string>("");

  // Sort currentRows with field name asc/desc
  const sortRows = (fieldName: string): void => {
    const rows: any[] = [...props.currentRows];
    let direction = "asc";

    // already sorted, we reverse rows
    if (fieldName + direction === sortBy) {
      rows.reverse();
      direction = "desc";
      // sort rows with clicked field
    } else {
      rows.sort((a, b) =>
        a[fieldName] > b[fieldName] ? 1 : b[fieldName] > a[fieldName] ? -1 : 0
      );
    }

    props.setCurrentRows(rows);
    setSortBy(fieldName + direction);
  };

  return (
    <thead className="datatable-head">
      <tr>
        {props.namedFields?.slice(0, 5).map((namedField, index) => (
          <th
            data-testid={`datatable-field`}
            onClick={() => sortRows(props.tableFields[index])}
            key={`datatable-fields-${index}`}
          >
            {namedField}
          </th>
        ))}
      </tr>
    </thead>
  );
};
