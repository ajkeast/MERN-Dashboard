import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, colors, LinearProgress } from '@mui/material';

const FirstTable = ({ data, isLoading }) => {
  // Define columns for the DataGrid
  const columns = [
    { field: 'user_id', headerName: 'User ID', flex: 1 },
    { field: 'firsts', headerName: 'Firsts', flex: 1 },
    { field: 'days_since_first', headerName: 'Days Since First', flex: 1 },
  ];

  if (!data || isLoading) return (
    <DataGrid
        columns={columns}
        rows={[]}
        slots={{loadingOverlay: LinearProgress}}
        loading
        {...data}
      />
  )

  else {
    
    // Map the data to rows
    const rows = data.map((item, index) => ({
      id: index + 1,
      user_id: item.user_id,
      firsts: item.firsts,
      days_since_first: item.days_since_first,
    }));

    return (
      <Box>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } }
          }}
          autoHeight
        />
      </Box>
    );
  };
}
export default FirstTable;
