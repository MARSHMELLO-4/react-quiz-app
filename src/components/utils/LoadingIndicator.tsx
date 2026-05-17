import { Box, CircularProgress } from '@mui/material';
import React from 'react'

const LoadingIndicator = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress aria-label="Loading…" />
    </Box>
  );
}

export default LoadingIndicator
