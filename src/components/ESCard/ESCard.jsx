import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Colors from '@/common/Colorscomponents';

const ESCard = (props) => {
  const { title, desc, icon, onCardClick } = props;
  return (
    <Card
      onClick={onCardClick}
      sx={{
        backgroundColor: Colors.airaPrimary,
        userSelect: "none",
        borderRadius: "10px",
        cursor: "pointer",
        borderLeft: `5px solid transparent`,
        borderBottom: `5px solid transparent`,
        "&:hover": {
          borderLeft: `5px solid ${Colors.airaSecondary}`,
          borderBottom: `5px solid ${Colors.airaSecondary}`,
          transition: "border 0.30s ease-in-out",
        },
      }}
    >
      <CardContent>
        <img
          src={`/images/solutions/${icon}`}
          alt=""
          style={{
            height: "56px",
            width: "56px",
          }}
        />
        <Typography variant="body1" sx={{ color: "#fff", mt: 1 }}>
          {title}
        </Typography>
        <Typography variant="caption" sx={{ color: "#fff" }}>
          {desc}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ESCard