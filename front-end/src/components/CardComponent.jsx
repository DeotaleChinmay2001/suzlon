import { Card, TextField } from "@mui/material";
import React from "react";

const CardComponent = (props) => {
  const { editable, onChange, children } = props;

  return (
    <Card sx={{ padding: "20px" }}>
      {editable ? (
        // Render editable content with input fields
        <form>
          <TextField
            label="Edit Name"
            variant="outlined"
            defaultValue={children}
            fullWidth
            onChange={(e) => onChange(e.target.value)}
          />
        </form>
      ) : (
        // Render non-editable content
        <React.Fragment>{children}</React.Fragment>
      )}
    </Card>
  );
};

export default CardComponent;
