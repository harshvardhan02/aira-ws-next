import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import Colors from "@/common/Colorscomponents";
import Link from 'next/link'


export const ESListButton = (props) => {
  const { sx, children } = props;
  return (
    <Link
      href={`/${props.to}`}
      style={{
        textDecoration: "none",
        color: "#000",
      }}
    >
      <ListItemButton
        sx={{
          px: 3,
          borderLeft: "8px solid transparent",
          borderRadius: "4px",
          "&:hover": {
            borderLeft: `8px solid ${Colors.airaSecondary}`,
            transition: "border-left 0.2s",
          },
        }}
      >
        {children}
      </ListItemButton>
    </Link>
  );
};