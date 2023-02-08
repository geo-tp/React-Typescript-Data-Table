import { useEffect, useState } from "react";

export const DataTableUtilities = (props: {
  rowNumberFilter: number;
  rowNumberOptions: number[];
  setRowNumberFilter: Function;
  totalRows: object[];
  setDataset: Function;
  pageIndex: number;
  setPageIndex: Function;
}) => {
  const [searchFormattedRows, setSearchFormattedRows] = useState<string[]>([]);

  // Build search dataset by formatting row object to string
  useEffect(() => {
    const rowStrings = [];
    for (let row of props.totalRows) {
      const values = Object.values(row);
      const stringValues = values.join(" ").toLocaleLowerCase();
      rowStrings.push(stringValues);
    }
    setSearchFormattedRows(rowStrings);
  }, [props.totalRows]);

  // Search occurences into the search formatted rows
  const searchByKeywords = (keywords: string): void => {
    const occurences = [];

    if (keywords) {
      for (let i = 0; i < props.totalRows.length; i++) {
        let rowString = searchFormattedRows[i];

        if (rowString.includes(keywords.toLocaleLowerCase())) {
          occurences.push(props.totalRows[i]);
        }

        props.setDataset(occurences);
        props.setPageIndex(0);
      }
      // there is no keywords, we revert currentRows to initial state
    } else {
      props.setDataset(props.totalRows);
    }
  };

  return (
    <div className="datatable-utilities">
      <div className="datatable-utilities__row-number-selector">
        <span>Show </span>
        <select
          data-testid="datatable-rows-number-selector"
          value={props.rowNumberFilter}
          onChange={(e) => props.setRowNumberFilter(parseInt(e.target.value))}
          name="row-number-selector"
          id="row-number-selector"
        >
          {props.rowNumberOptions.map((num) => (
            <option
              key={`row-number-option-${num}`}
              data-testid="datatable-rows-number-option"
              value={num}
            >
              {num}
            </option>
          ))}
        </select>
        <span> entries</span>
      </div>

      <div className="datatable-utilities__search-bar">
        <label htmlFor="row-search-bar">Search : </label>
        <input
          data-testid="row-search-bar"
          onChange={(e) => searchByKeywords(e.target.value)}
          type="text"
          name="row-search-bar"
          id="row-search-bar"
        />
      </div>
    </div>
  );
};
