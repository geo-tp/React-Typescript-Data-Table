import { useEffect, useState } from "react";

export const DataTablePagination = (props: {
  rowNumberFilter: number;
  dataset: object[];
  pageIndex: number;
  currentRows: object[];
  setPageIndex: Function;
}) => {
  const [pageNumbers, setPageNumbers] = useState<number[]>([1]);
  const [pageTotalCount, setPageTotalCount] = useState(1);
  const startingRowIndex = props.rowNumberFilter * props.pageIndex + 1;
  let endRowIndex =
    startingRowIndex + props.rowNumberFilter > props.dataset.length
      ? props.dataset.length
      : startingRowIndex + props.rowNumberFilter - 1;

  // Build pages link array
  useEffect(() => {
    const pageCount = props.dataset.length / props.rowNumberFilter + 1;
    let pages = [];

    let startIndex = 1;
    let endIndex = pageCount - 1;

    if (pageCount > 10) {
      startIndex = Math.max(1, props.pageIndex - 2);
      endIndex = Math.min(pageCount, props.pageIndex + 6);
    }

    for (let i = startIndex; i < endIndex; i++) {
      pages.push(i);
    }

    setPageNumbers(pages.slice(0, 7));
    setPageTotalCount(props.dataset.length / props.rowNumberFilter - 1);
  }, [props.dataset, props.rowNumberFilter, props.pageIndex]);

  // Add/Substract a value to pageIndex with max/min constraints (used by arrows button)
  const changePageIndex = (valueToAdd: number) => {
    const maxIndex = Math.floor(props.dataset.length / props.rowNumberFilter);

    let finalIndex = Math.min(props.pageIndex + valueToAdd, maxIndex);
    finalIndex = Math.max(0, finalIndex);

    props.setPageIndex(finalIndex);
  };

  return (
    <div className="datatable-pagination">
      <p className="datatable-pagination__infos">
        Showing {startingRowIndex} to {endRowIndex} of {props.dataset.length}{" "}
        entries
      </p>
      <div className="datatable-pagination__buttons">
        <button
          data-testid="datatable-pagination-prev"
          onClick={(e) => changePageIndex(-1)}
          className="datatable-pagination__previous"
          disabled={props.pageIndex === 0}
        >
          Previous
        </button>
        <div className="datatable-pagination__buttons__pages">
          {pageNumbers.map((pageNumber, index) => (
            <button
              key={`datatable-page-button-${index}`}
              className={
                props.pageIndex === pageNumber - 1
                  ? "datatable-pagination__buttons__pages__selected"
                  : ""
              }
              onClick={() => props.setPageIndex(pageNumber - 1)}
            >
              {pageNumber}
            </button>
          ))}
        </div>
        <button
          data-testid="datatable-pagination-next"
          disabled={props.pageIndex > pageTotalCount}
          onClick={(e) => changePageIndex(1)}
          className="datatable-pagination__next"
        >
          Next
        </button>
      </div>
    </div>
  );
};
