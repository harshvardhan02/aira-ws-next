import {
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  Typography,
  Box
} from "@mui/material";
import React from "react";
import Colors from "@/common/Colorscomponents";
import Link from 'next/link';
import { useRouter } from 'next/router';


export const ESListButton = (props) => {
  const { sx, children } = props;
  const router = useRouter();

  const routerHandler = (route) => {
    router.push(`/${route}`);
    // router.reload(`/${route}`);
  }

  return (
    <Box
      // href={`/${props.to}`}
      // style={{
      //   textDecoration: "none",
      //   color: "#000",
      // }}
      onClick={() => routerHandler(`${props.to}`)}
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
    </Box>
  );
};