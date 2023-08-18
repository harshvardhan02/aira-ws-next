import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from "../../common/Colors";
import ESCard from '@/components/ESCard/ESCardcomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';

const SOLUTIONSDATA = [
  {
    title: "About us",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "banking.svg",
    route: "company/about_us",
  },
  {
    title: "Leadership Team",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "insurance.svg",
    route: "company/leadership_team",
  },
  {
    title: "Pricing",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "healthcare.svg",
    route: "company/pricing",
  },
  {
    title: "Careers at AIRA",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "company/careers",
  },
  {
    title: "Corporate Social Responsibility",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "company/csr",
  },
  {
    title: "Partner",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "bpo.svg",
    route: "company/partner",
  },
  {
    title: "Partnership Portal Page.",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "company/partnership_portal_page",
  },
];

const index = () => {
  return (
    <Box sx={{
      display: "flex",
      backgroundImage: "url(/images/solutions/solutiongirl.png)",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right",
    }}>
      <Container>
        <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 4 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {/* <Grid item xs={2}></Grid> */}
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                flexGrow: 1,
              }}
            >
              <Stack sx={{ my: 10 }}>
                <Box sx={{ width: "40%" }}>
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    Our{" "}
                    <span style={{ color: Colors.airaSecondary }}>
                      Company
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    Statuerimus vitii vita nobis vitii maxime amicis exempla
                    maxime velint accepimus exempla res proxime aut quibus
                    accedunt sunt communis qui.
                  </Typography>
                </Box>
                <Grid container gap={2} sx={{ p: 2, pl: 0 }}>
                  {SOLUTIONSDATA.map((item, idx) => {
                    return (
                      <Grid item key={idx}>
                        <ESCard
                          {...item}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <div
        style={{
          position: "absolute",
          top: 100,
        }}
      >
        <AIRAMonoLinesLeft />
      </div>
    </Box>
  )
}

export default index