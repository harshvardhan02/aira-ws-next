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
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import TryAiraDialog from '../TryAiraDialog/TryAiraDialog';
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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
      { label: "About us", route: "company/about_us" },
      { label: "Career", route: "company/careers" },
      // { label: "Leadership Team", route: "company/leadership_team" },
      { label: "Documentation", route: "resources/documentation" },
      { label: "Pricing", route: "company/pricing" },
      { label: "Licence", route: "company/licence" },
      { label: "Partner", route: "company/partner" },
    ],
    gridValue: { xs: 12, md: 3 },
  },
  {
    title: "Explore",
    lists: [
      {
        label: "Hyper-automation Solution",
        route: "platform/has",
      },
      { label: "AI/ML", route: "platform/aiml" },
      {
        label: "Robotic Process automation",
        route: "platform/rpa",
      },
      {
        label: "Intelligent Document processing",
        route: "platform/idp",
      },
      { label: "Workflow", route: "platform/workflow" },
      { label: "Orchestrator", route: "platform/orchestrator" },
      { label: "Predictive Analytics", route: "platform/predictive_analytics" },
      { label: "Process mining", route: "platform/process_mining" },
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
  const { t } = useTranslation('footer');
  const router = useRouter();
  const [openTryAIRADialog, setOpenTryAIRADialog] = useState(false);

  const footerNavigation = (route) => {
    router.push(`/${route}`)
  }

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
          onClick={() => {
            setOpenTryAIRADialog(true);
          }}
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
          rowSpacing={1}
        // columnSpacing={{ xs: 2, sm: 3, md: 12, lg: 6 }}
        >
          <Grid
            item
            container
            justifyContent="space-between"
            xs={12} sm={12} md={12} lg={7}
          >
            {FOOTERLINKS.map((item, idx) => {
              return (
                <Grid key={idx} item container justifyContent="space-between" xs={12} lg={4}>
                  <Box sx={{ width: '100%' }} {...item.gridValue}>
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
                            onClick={() => footerNavigation(listItem.route)}
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
                            {t(listItem.label)}
                          </Typography>
                        );
                      })}
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            xs={12} sm={12} md={12} lg={5}
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
      <TryAiraDialog
        open={openTryAIRADialog}
        handleClose={() => {
          setOpenTryAIRADialog(false);
        }}
      />
    </Box>
  )
}

export default Footer