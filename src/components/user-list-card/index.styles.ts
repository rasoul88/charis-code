import { styled } from "@mui/system";
import { List } from "@mui/material";

export const UsersCard = styled("div")({
  width: "432px",
  height: "755px",
  display: "flex",
  flexShrink: 0,
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "16px",
  background: "white",
});

export const ListContainer = styled(List)({
  width: "100%",
  height: "616px",
  overflow: "auto",
  marginBottom: "10px",
});
