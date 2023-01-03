import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "trackingId", headerName: "Tracking ID", width: 130 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
  },
];

const rows = [
  {
    id: 1,
    trackingId: 189084240,
    lastName: "Snow",
    firstName: "Jon",
    date: "2 February 2022",
    status: "Approved",
  },
  {
    id: 2,
    trackingId: 189084243,
    lastName: "Lannister",
    firstName: "Cersei",
    date: "2 Januart 2022",
    status: "Approved",
  },
  {
    id: 3,
    trackingId: 189084247,
    lastName: "Lannister",
    firstName: "Jaime",
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 4,
    trackingId: 189084244,
    lastName: "Stark",
    firstName: "Arya",
    date: "2 December 2022",
    status: "Pending",
  },
  {
    id: 5,
    trackingId: 189084245,
    lastName: "Targaryen",
    firstName: "Daenerys",
    date: "2 August 2022",
    status: "Delivered",
  },
  {
    id: 6,
    trackingId: 189484254,
    lastName: "Melisandre",
    firstName: null,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 7,
    trackingId: 189084247,
    lastName: "Clifford",
    firstName: "Ferrara",
    date: "2 May 2022",
    status: "Pending",
  },
  {
    id: 8,
    trackingId: 189084231,
    lastName: "Frances",
    firstName: "Rossini",
    date: "2 March 2022",
    status: "Delivered",
  },
  {
    id: 9,
    trackingId: 189084249,
    lastName: "Roxie",
    firstName: "Harvey",
    date: "2 April 2022",
    status: "Pending",
  },
  {
    id: 10,
    trackingId: 189084240,
    lastName: "Snow",
    firstName: "Jon",
    date: "2 February 2022",
    status: "Approved",
  },
  {
    id: 11,
    trackingId: 189084243,
    lastName: "Lannister",
    firstName: "Cersei",
    date: "2 Januart 2022",
    status: "Approved",
  },
  {
    id: 12,
    trackingId: 189084243,
    lastName: "Lannister",
    firstName: "Cersei",
    date: "2 Januart 2022",
    status: "Approved",
  },
  {
    id: 13,
    trackingId: 189084247,
    lastName: "Lannister",
    firstName: "Jaime",
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 14,
    trackingId: 189084244,
    lastName: "Stark",
    firstName: "Arya",
    date: "2 December 2022",
    status: "Pending",
  },
  {
    id: 15,
    trackingId: 189084245,
    lastName: "Targaryen",
    firstName: "Daenerys",
    date: "2 August 2022",
    status: "Delivered",
  },
  {
    id: 16,
    trackingId: 189484254,
    lastName: "Melisandre",
    firstName: null,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 17,
    trackingId: 189084247,
    lastName: "Clifford",
    firstName: "Ferrara",
    date: "2 May 2022",
    status: "Pending",
  },
  {
    id: 18,
    trackingId: 189084231,
    lastName: "Frances",
    firstName: "Rossini",
    date: "2 March 2022",
    status: "Delivered",
  },
  {
    id: 19,
    trackingId: 189084249,
    lastName: "Roxie",
    firstName: "Harvey",
    date: "2 April 2022",
    status: "Pending",
  },
  {
    id: 20,
    trackingId: 189084249,
    lastName: "Roxie",
    firstName: "Harvey",
    date: "2 April 2022",
    status: "Pending",
  },
  {
    id: 21,
    trackingId: 189084240,
    lastName: "Snow",
    firstName: "Jon",
    date: "2 February 2022",
    status: "Approved",
  },
  {
    id: 22,
    trackingId: 189084243,
    lastName: "Lannister",
    firstName: "Cersei",
    date: "2 Januart 2022",
    status: "Approved",
  },
  {
    id: 23,
    trackingId: 189084247,
    lastName: "Lannister",
    firstName: "Jaime",
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 24,
    trackingId: 189084244,
    lastName: "Stark",
    firstName: "Arya",
    date: "2 December 2022",
    status: "Pending",
  },
  {
    id: 25,
    trackingId: 189084245,
    lastName: "Targaryen",
    firstName: "Daenerys",
    date: "2 August 2022",
    status: "Delivered",
  },
  {
    id: 26,
    trackingId: 189484254,
    lastName: "Melisandre",
    firstName: null,
    date: "2 March 2022",
    status: "Approved",
  },
  {
    id: 27,
    trackingId: 189084247,
    lastName: "Clifford",
    firstName: "Ferrara",
    date: "2 May 2022",
    status: "Pending",
  },
  {
    id: 28,
    trackingId: 189084231,
    lastName: "Frances",
    firstName: "Rossini",
    date: "2 March 2022",
    status: "Delivered",
  },
  {
    id: 29,
    trackingId: 189084249,
    lastName: "Roxie",
    firstName: "Harvey",
    date: "2 April 2022",
    status: "Pending",
  },
];

export default function DataTable() {
  return (
    <div>
      <h3 style={{ color: "#0b5394" }} >Recent Orders </h3>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pdateSize={5}
          rowsPerPdateOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}
