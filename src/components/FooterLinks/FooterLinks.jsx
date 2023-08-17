import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Container
} from "@mui/material";
import Colors from "../../common/Colors";
import Link from 'next/link'

const termsLinks = [
  { id: "trust_and_security", label: "Trust and Security", route: "/trust_security" },
  { id: "terms_of_use", label: "Terms of Use", route: "/terms_use" },
  { id: "privacy_policy", label: "Privacy Policy", route: "/privacy_policy" },
  { id: "cookies_policy", label: "Cookies Policy", route: "/cookie_policy" },
  { id: "disclaimer", label: "Disclaimer", route: "/disclaimer" },
];

const FooterLinks = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ width: '100%', py: 4 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {termsLinks.map((linkItem, idx) => {
            return (

              <Grid
                key={idx}
                item
                container
                justifyContent="center"
                alignItems="center"
                xs={12 / 2} sm={12 / 3} md={12 / 5}
              >
                <Link style={{ textDecoration: "none" }} href={linkItem.id}>
                  <Typography
                    key={linkItem.id}
                    to={linkItem.route}
                    variant="subtitle2"
                    sx={{
                      textAlign: 'center',
                      cursor: "pointer",
                      color: Colors.airaSecondary,
                      textDecoration: "none",
                      paddingRight: 5,
                      borderRight: "1px solid #000",
                      "&:last-child": {
                        border: 0,
                      },
                      fontWeight: "bold",
                      pr: 1,
                      "&:hover": {
                        color: Colors.eggplant,
                      },
                    }}
                  >
                    {linkItem.label}
                  </Typography>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  )
}

export default FooterLinks