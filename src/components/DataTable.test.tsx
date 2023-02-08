// @ts-nocheck

import { fireEvent, render, screen } from "@testing-library/react";
import { DataTable } from "./DataTable";
import { mockedEmployees } from "../../data/mockedEmployees";

describe("When datatable is filled with json data", () => {
  test("Then, it should render", () => {
    render(<DataTable dataset={mockedEmployees} />);
    const datatable = screen.queryByTestId("datatable");

    expect(datatable).toBeInTheDocument();
  });

  test("Then, dataset should be displayed", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const displayedRow = screen.getByText(mockedEmployees[0].firstname);

    expect(displayedRow).toBeTruthy();
  });

  test("Then, selected number of rows should be displayed", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const rows = screen.queryAllByTestId("datatable-row");
    const option = screen.queryAllByTestId("datatable-rows-number-option")[0];
    const expectedRowNumber = Math.min(mockedEmployees.length, option.value);

    expect(rows.length).toEqual(expectedRowNumber);
  });

  test("Then, click on a row should display detail", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const row = screen.queryAllByTestId("datatable-row")[0];
    fireEvent.click(row);

    const detail = screen.queryAllByTestId("datatable-dropdown")[0];

    expect(detail).toBeTruthy();
  });

  test("Then, search query should reduce dataset", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const searchBar = screen.queryByTestId("row-search-bar");
    fireEvent.change(searchBar, { target: { value: "Marten" } });

    const row = screen.queryByText("Marten");

    expect(row).toBeTruthy();
  });

  test("Then, click on next button should change page", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const next = screen.queryByTestId("datatable-pagination-next");
    const prev = screen.queryByTestId("datatable-pagination-prev");

    fireEvent.click(next);

    expect(prev.disabled).toBeFalsy();
  });

  test("Then, click on previous button should change page", () => {
    render(<DataTable dataset={mockedEmployees} />);

    const next = screen.queryByTestId("datatable-pagination-next");
    const prev = screen.queryByTestId("datatable-pagination-prev");

    fireEvent.click(next);
    fireEvent.click(prev);

    const row = screen.getByText("Clemens");

    expect(row).not.toBeNull();
  });
});
