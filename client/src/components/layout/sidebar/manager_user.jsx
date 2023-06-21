import "./sidebar.scss";
import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

import { Box } from "@mui/material/";
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

function Manager_user() {
  const { data } = useDemoData({
    dataSet: "Employee",
    visibleFields: VISIBLE_FIELDS,
    rowLength: 100,
  });

  // Otherwise filter will be applied on fields such as the hidden column id
  const columns = React.useMemo(
    () =>
      data.columns.filter((column) => VISIBLE_FIELDS.includes(column.field)),
    [data.columns]
  );

  return (
    <div style={{ margin: "10px", outline: "none" }}>
      <Box sx={{ height: 400, width: 1 }}>
        <DataGrid
          {...data}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
        />
      </Box>
    </div>
  );
}
export default Manager_user;
