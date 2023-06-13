import { useState } from "react";

import "./TableApp.css";
import { Table } from "./tablecomponents/Table";
import { Modal } from "./tablecomponents/Modal";

export default function TableApp() {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      floorSlot: "1 | 1",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 2",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 3",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 4",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 5",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 6",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 7",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 8",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 9",
      carDescription: "Available",
      status: "Open",
    },
    {
      floorSlot: "1 | 10",
      carDescription: "Available",
      status: "Open",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  return (
    <div className="slotsTable">
      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}

// export default tableApp;
