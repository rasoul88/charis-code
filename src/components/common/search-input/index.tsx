import React from "react";
import TextField from "@mui/material/TextField";

interface Props {
  onChange: (event: string) => void;
}
const SearchInput = ({ onChange }: Props) => {
  return (
    <TextField
      variant="outlined"
      placeholder="search..."
      style={{ width: "100%" }}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SearchInput;
