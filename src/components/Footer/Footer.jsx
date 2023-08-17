import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
  Container
} from "@mui/material";
import _ from "lodash";
import Colors from '@/common/Colorscomponents';
import NewsLetter from '../NewsLetter/NewsLetter';
import FooterLinks from '../FooterLinks/FooterLinks';
// import FlagFrance from "/FlagFrance.png";
// import FlagIndia from "/flagIndia.png";
// import FlagSaudi from "/flagSaudi.png";
// import Mail from "../public/mail.png";

const FOOTERFLAGData = [
  {
    id: "france_add",
    icon: "france_flag",
    text: "15 Rue, Jacobi Netter,Strasbourg, France",
    type: "address",
  },
  {
    id: "france_contact",
    icon: "france_flag",
    text: "+33 1 89 16 58 28",
    type: "contact",
  },
  {
    id: "india_add",
    icon: "india_flag",
    text: "502 Vikram Heights, YN Rd,Indore, India",
    type: "address",
  },
  {
    id: "india_contact",
    icon: "india_flag",
    text: "+91 731 4978110",
    type: "contact",
  },
  {
    id: "saudi_add",
    icon: "saudi_flag",
    text: "Riyadh, Saudi Arabia",
    type: "address",
  },
  {
    id: "saudi_contact",
    icon: "saudi_flag",
    text: "+966 55 441 6442",
    type: "contact",
  },
  {
    id: "mail",
    icon: "mail",
    text: "connect@aira.fr",
    type: "email",
  },
];

const getIcon = (icon) => {
  switch (icon) {
    case "france_flag":
      return (
        <Avatar
          src='/flagIndia.png'
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "india_flag":
      return (
        <Avatar
          src='/flagFrance.png'
          alt="Flag France"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "saudi_flag":
      return (
        <Avatar
          src='/flagSaudi.png'
          alt="Flag Saudi"
          sx={{ width: 25, height: 25 }}
        />
      );
    case "mail":
      return <Avatar src='./mail.png' alt="Mail" sx={{ width: 25, height: 25 }} />;
    default:
      return (
        <Avatar
          src='/flagIndia.png'
          alt="Flag India"
          sx={{ width: 25, height: 25 }}
        />
      );
  }
};

const FOOTERLINKS = [
  {
    title: "Company",
    lists: [
      { label: "About us", route: "about_us" },
      { label: "Career", route: "career" },
      { label: "Leadership Team", route: "leadership_team" },
      { label: "Documentation", route: "documentation" },
      { label: "Pricing", route: "pricing" },
      { label: "Licence", route: "licence" },
      { label: "Partner", route: "partner" },
    ],
    gridValue: { xs: 12, md: 3 },
  },
  {
    title: "Explore",
    lists: [
      {
        label: "Hyper-automation Solution",
        route: "hyper_automation_solution",
      },
      { label: "AI/ML", route: "ai_ml" },
      {
        label: "Robotic Process automation",
        route: "robotic_process_automation",
      },
      {
        label: "Intelligent Document processing",
        route: "intelligent_document_processing",
      },
      { label: "Workflow", route: "workflow" },
      { label: "Orchestrator", route: "orchestrator" },
      { label: "Predictive Analytics", route: "predictive_analytics" },
      { label: "Process mining", route: "process_mining" },
    ],
    gridValue: { xs: 12, md: 4 },
  },
  {
    title: "Support",
    lists: [
      { label: "Sales Support", route: "sales_support" },
      { label: "Technical Support", route: "technical_support" },
    ],
    gridValue: { xs: 12, md: 5 },
  },
];

const Footer = () => {
  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Button
          color="primary"
          variant="contained"
          className="text-nowrap"
          sx={{
            fontFamily: "Montserrat",
            fontSize: "14px",
            fontWeight: 700,
            borderRadius: "30px",
            backgroundColor: "#6755DF"
          }}
        >
          Request your free trail now
        </Button>
      </Grid>
      <Divider sx={{ my: 2 }} />

      <NewsLetter />

      <Divider sx={{ my: 2 }} />
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          // rowSpacing={1}
          columnSpacing={{ xs: 2, sm: 3, md: 12, lg: 6 }}
        >
          <Grid
            item
            container
            justifyContent="space-between"
            xs={2} sm={12} md={12} lg={6}
          >
            {FOOTERLINKS.map((item, idx) => {
              return (
                <Box key={idx} {...item.gridValue}>
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, color: Colors.airaSecondary }}
                  >
                    {item.title}
                  </Typography>
                  <Box gap={1} sx={{ my: 1 }}>
                    {item.lists.map((listItem, listIdx) => {
                      return (
                        <Typography
                          my={1}
                          variant="subtitle2"
                          className="text-nowrap"
                          key={listItem.route}
                          sx={{
                            cursor: "pointer",
                            "&:hover": {
                              //color: Colors.airaPrimary,
                              //color: "#000",
                              // fontWeight: 600,
                              color: Colors.airaSecondary,
                            },
                          }}
                        >
                          {listItem.label}
                        </Typography>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            xs={12} sm={12} md={12} lg={6}
          >
            <Grid
              item
              container
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              xs={12} sm={12} md={12}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: 700, color: Colors.airaSecondary }}
              >
                Contact Us
              </Typography>
            </Grid>
            {FOOTERFLAGData.map((flagItem, flasgIdx) => {
              let _connectType = "mailto";
              switch (flagItem.type) {
                case "email":
                  _connectType = `mailto:${flagItem.text}`;
                  break;
                case "contact":
                  _connectType = `tel:${flagItem.text}`;
                  break;
                case "address":
                  _connectType = `https://www.google.com/maps`;
                  break;
                default:
                  _connectType = "#";
              }
              return (
                <Grid
                  item
                  key={flagItem.id}
                  rowGap={{ xs: 2, sm: 3, md: 4 }}
                  sm={4}
                  container
                  // direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  xs={12} md={6}
                >
                  <Stack direction="row" gap={1.5} alignItems="center" sx={{ py: 1.5 }}>
                    <div>{getIcon(flagItem.icon)}</div>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontSize: "14px", fontFamily: "Montserrat" }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          //color: "#fff",
                          color: "#000",
                        }}
                        href={_connectType}
                        target={
                          _.isEqual(flagItem.type, "address")
                            ? "_blank"
                            : "_self"
                        }
                        rel="noreferrer"
                      >
                        {flagItem.text}
                      </a>
                    </Typography>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Typography textAlign="center" variant="subtitle2" sx={{ fontWeight: 500, pt: 3 }}>
          Copyright © {new Date().getFullYear()} AIRA a product of
          HyperAutomation Solutions Pvt. Ltd. All Rights Reserved.
        </Typography>
      </Container>
      {/* Footer links  */}
      <FooterLinks />
    </Box>
  )
}

export default Footer