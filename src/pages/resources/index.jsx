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
    title: "Blogs",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "banking.svg",
    route: "resources/blogs",
  },
  {
    title: "Success Stories",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "insurance.svg",
    route: "resources/success_stories",
  },
  {
    title: "White Paper",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "healthcare.svg",
    route: "resources/whitepapers",
  },
  {
    title: "Events",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "resources/events",
  },
  {
    title: "Brochure",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "resources/brochures",
  },
  {
    title: "Documentation",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "bpo.svg",
    route: "resources/documentation",
  },
  {
    title: "Testimonials",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "resources/testimonials",
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
      <Container maxWidth="lg">
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
                      Resources
                    </span>
                  </Typography>
                  <Typography variant="body1" sx={{ my: 3 }}>
                    Statuerimus vitii vita nobis vitii maxime amicis exempla
                    maxime velint accepimus exempla res proxime aut quibus
                    accedunt sunt communis qui.
                  </Typography>
                </Box>
                <Grid container gap={1}>
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