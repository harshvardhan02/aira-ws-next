import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Container
} from "@mui/material";
import Colors from "../../common/Colors";
import ESCard from '@/components/ESCard/ESCardcomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import { useRouter } from 'next/router'

const SOLUTIONSDATA = [
  {
    title: "Hyper-automation Solution",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "banking.svg",
    route: "platform/has",
  },
  {
    title: "Robotic Process automation",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "insurance.svg",
    route: "platform/rpa",
  },
  {
    title: "AI / ML",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "healthcare.svg",
    route: "platform/aiml",
  },
  {
    title: "IDP",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "telecom.svg",
    route: "platform/idp",
  },
  {
    title: "NLP",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "retail.svg",
    route: "platform/nlp",
  },
  {
    title: "Workflow",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "bpo.svg",
    route: "platform/workflow",
  },
  {
    title: "Orchestrator",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "platform/orchestrator",
  },
  {
    title: "Predictive Analytics",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "platform/predictive_analytics",
  },
  {
    title: "Process mining",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "platform/process_mining",
  },
  {
    title: "Advanced Analytics",
    desc: "Patris Scipionis florem diuturnum et adult.",
    icon: "manufacturing.svg",
    route: "platform/advancedAnalytics",
  },
];


const index = () => {
  // const router = useRouter()

  // const navigateToRoute = (route) => {
  //   router.push(`/${route}`)
  // }


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
                      Platform
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