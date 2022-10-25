import { TextField, MenuItem, } from "@mui/material";
import React from "react";

export default function MenuSelect({options, value}) {
    const [newValue, setNewValue] = React.useState(value);

    const handleChange = (event) => {
        setNewValue(event.target.value);
    };

    return(
        <TextField
          select
          value={newValue}
          onChange={handleChange} 
          
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    )
}