
// StatesData.js
import React from "react";
import { Box, Typography,Grid } from "@mui/material";
import CardComponent from "./CardComponent";

const StatesData = ({ statelist }) => {
  return (
    <Grid item xs={5} sx={{ bgcolor: '#9ea0a3', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h6" sx={{ color: '#fff', marginBottom: '10px', textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase' }}>States</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {statelist.map((state, index) => (
          <CardComponent key={index} sx={{ width: 'fit-content', backgroundColor: '#702082', color: '#fff', fontSize: '14px', padding: '6px 12px', borderRadius: '4px' }}>{state}</CardComponent>
        ))}
      </Box>
    </Grid>
  );
};

export default StatesData;