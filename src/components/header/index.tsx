import React from "react";
import { Typography } from "@mui/material";
import { HeaderContainer } from "./index.styles";
import HelpIcon from "@mui/icons-material/Help";

const Header = () => {
  return (
    <HeaderContainer position="static">
      <img
        alt="#"
        src="data:image/png;base64,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"
        height="30"
      ></img>
      <Typography variant="h6" color="inherit">
        code challenge
      </Typography>
      <HelpIcon />
    </HeaderContainer>
  );
};

export default Header;
