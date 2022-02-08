//Library imports
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";

//Local imports
import { dataColumns } from "assets/data/sampleData";
import { sampleData } from "assets/data/sampleData";

const presentableColumns: GridColDef[] = dataColumns.map((col) => {
  return {
    field: `${col}`,
    headerName: `${col}`,
    width: 160,
    headerAlign: "center",
    headerClassName: "data-table__header",
  };
});

const presentableRows = sampleData;
const DataTable = () => {
  return (
    <Box
      style={{ marginTop: 50 }}
      sx={{
        height: 550,
        width: 1,
        "& .data-table__header": {
          backgroundColor: "#ccc",
          textTransform: "uppercase",
        },
      }}
    >
      <DataGrid
        rows={presentableRows}
        columns={presentableColumns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </Box>
  );
};
export default DataTable;
