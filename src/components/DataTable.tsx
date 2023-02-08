import { useEffect, useState } from "react";
import { DataTableBody } from "./DataTableBody";
import { DataTableHead } from "./DataTableHead";
import { DataTablePagination } from "./DataTablePagination";
import { DataTableUtilities } from "./DataTableUtilities";

export const DataTable = (props: {
  dataset: Array<object>;
  fields?: Array<string>;
}) => {
  const rowNumberOptions = [10, 25, 50, 100];
  const [rowNumberFilter, setRowNumberFilter] = useState(rowNumberOptions[0]);
  const [currentRows, setCurrentRows] = useState(props.dataset);
  const [dataset, setDataset] = useState(props.dataset);
  const [pageIndex, setPageIndex] = useState(0);


  // Reset page index to 0 when rowNumberFilter get updated
  useEffect(() => {
    setPageIndex(0);
  }, [rowNumberFilter]);

  // In case dataset get updated
  useEffect(() => {
    setDataset(props.dataset);
  }, [props.dataset]);

  // Calculate current showing rows taking into account pagination
  useEffect(() => {
    const currentStartIndex = pageIndex * rowNumberFilter;
    const currentEndIndex = pageIndex * rowNumberFilter + rowNumberFilter;
    setCurrentRows(dataset.slice(currentStartIndex, currentEndIndex));
  }, [rowNumberFilter, pageIndex, dataset]);

  // Return keys of dataset object to use it as fields if props.fields is null
  const extractFields: Function = (): string[] => {
    return Object.keys(props.dataset[0]);
  };

  return (
    <div className="datatable" data-testid="datatable">
      <DataTableUtilities
        rowNumberFilter={rowNumberFilter}
        rowNumberOptions={rowNumberOptions}
        setRowNumberFilter={setRowNumberFilter}
        totalRows={props.dataset}
        setDataset={setDataset}
        pageIndex={pageIndex}
        setPageIndex={setPageIndex}
      />

      <table>
        <DataTableHead
          currentRows={currentRows}
          setCurrentRows={setCurrentRows}
          namedFields={
            props.fields ? props.fields : extractFields(props.dataset)
          }
          tableFields={extractFields(props.dataset)}
        />
        <DataTableBody dataset={currentRows} />
      </table>

      <DataTablePagination
        rowNumberFilter={rowNumberFilter}
        dataset={dataset}
        currentRows={currentRows}
        setPageIndex={setPageIndex}
        pageIndex={pageIndex}
      />
    </div>
  );
};
