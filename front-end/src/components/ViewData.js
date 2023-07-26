// ViewData.js
import React from "react";
import { Box, Typography,Grid } from "@mui/material";
import CardComponent from "./CardComponent";

const ViewData = ({ access }) => {
  return (
    <Grid item xs={5} sx={{ bgcolor: "#9ea0a3", padding: "20px", borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold", textTransform: "uppercase", textAlign: "center", marginBottom: "10px" }}>View</Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
        {access.map((viewItem, index) => (
          <CardComponent key={index} sx={{ width: 'fit-content', backgroundColor: '#702082', color: '#fff', fontSize: '16px', padding: '8px 16px', borderRadius: '4px', textAlign: 'center' }}>{viewItem}</CardComponent>
        ))}
      </Box>
    </Grid>
  );
};

export default ViewData;
