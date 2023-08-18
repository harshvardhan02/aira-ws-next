import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  CardContent
} from "@mui/material";
import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Image from 'next/image'

const CENTER_MAX_WIDTH = "80%";

const AIRACANDODATA = [
  {
    id: 1,
    text: "Implementation of end to end processes that are faster and easier.",
  },
  {
    id: 2,
    text: "Digital workforce to reduce regulatory risks.",
  },
  {
    id: 3,
    text: "Higher compliance productivity to avoid discrepancies.",
  },
];

const ESCircle = (props) => {
  const { id, text } = props;
  return (
    <Box>
      <Stack
        direction="column"
        gap={2}
        alignItems="center"
        justifyContent="center"
      >
        <div
          style={{
            backgroundColor: "#eaf1fd",
            borderRadius: "40px",
            display: "flex",
            height: "80px",
            width: "80px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              verticalAlign: "middle",
              fontWeight: 700,
              color: Colors.airaSecondary,
            }}
          >
            {id}
          </Typography>
        </div>
        <Typography
          variant="subtitle2"
          sx={{ color: "#fff", textAlign: "center" }}
        >
          {text}
        </Typography>
      </Stack>
    </Box>
  );
};

const index = () => {
  return (
    <Box width="100" >
      {/* <Container maxWidth="lg"> */}
      <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 10 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Stack sx={{ my: 10 }}>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  Drive digital change <br />
                  <span style={{ color: Colors.airaSecondary }}>
                    with AIRA’s RPA
                  </span>
                </Typography>
                <Typography variant="body1" sx={{ my: 3 }}>
                  <b>AIRA empowers the banking and finance industry</b> to
                  automate their data-intensive and manual processes for enhanced
                  efficiency and strengthened customer services.
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src="/images/solutions/banking/bankingheader.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          margin: "0 auto",
          width: CENTER_MAX_WIDTH,
          my: 10,
        }}
      >
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 5 }}>
            RPA to ease off <br />
            <span style={{ color: Colors.airaSecondary }}>
              compliance issues
            </span>
          </Typography>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Image
                src="/images/solutions/banking/compliance.png"
                alt="bankingheader"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h6" sx={{ my: 1, fontWeight: 700 }}>
                We offer the best <br /> business ideas
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ my: 1, fontWeight: 600, lineHeight: 2 }}
              >
                The ever-changing consumer demands and regulatory environments
                continue to pose a constant challenge for the banking and
                financial institutions.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ my: 2, fontWeight: 400, lineHeight: 2 }}
              >
                Using intelligent technology such as RPA can help you cut down
                the operational costs and the time involved in addressing these
                challenges.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ my: 1, fontWeight: 400, lineHeight: 2 }}
              >
                From sales processes to loan repayment, automation is changing
                each aspect of the banking and finance industry. That’s where
                AIRA’s digital solutions help you. Powered by advanced
                technologies, AIRA sets you free from past limitations and
                allows you to gain complete control over your compliance costs
                so that you can make the process more intelligent than it ever
                was.
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ my: 1, fontWeight: 400, lineHeight: 2 }}
              >
                From sales processes to loan repayment, automation is changing
                each aspect of the banking and finance industry. That’s where
                AIRA’s digital solutions help you. Powered by advanced
                technologies, AIRA sets you free from past limitations and
                allows you to gain complete control over your compliance costs
                so that you can make the process more intelligent than it ever
                was.
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Box>
      {/* </Container> */}

      <Box sx={{ backgroundColor: Colors.airaPrimary }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "50%",
            py: 5,
          }}
        >
          <Stack direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h5" sx={{ fontWeight: 600, color: "#fff" }}>
              What can AIRA do{" "}
              <span style={{ color: Colors.airaSecondary }}>for you ?</span>
            </Typography>
          </Stack>
          <Grid container spacing={2} sx={{ my: 3 }}>
            {AIRACANDODATA.map((item) => {
              return (
                <Grid item xs={12} md={4} key={item.id}>
                  <ESCircle {...item} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Box>

      <Box
        sx={{
          margin: "0 auto",
          width: "70%",
          my: 3,
        }}
      >
        <Stack direction="column">
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, textAlign: "center" }}
            >
              <span style={{ color: Colors.airaSecondary }}>Benefits</span> of{" "}
              <br />
              Implementing AIRA
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 500,
                width: "80%",
                lineHeight: 2,
                textAlign: "center",
              }}
            >
              Banking and finance industry is well suited to adopt RPA to
              address its nagging pain points. AIRA quickly streamlines their
              operations by eliminating time consuming laborious activities.
            </Typography>
          </Stack>

          {/* BENEFITS starts */}
          <Stack
            sx={{
              backgroundImage: "url(/images/solutions/banking/benefit1.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "600px 400px",

              height: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card raised>
              <CardContent sx={{ width: "500px", p: 5 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                >
                  Strengthen customer engagement
                </Typography>

                <ul>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Real-time access to customer information
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Faster customer request resolution
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Cater to additional product/service needs with
                      personalized offerings
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Stack>
          {/* BENEFITS ends*/}
        </Stack>
      </Box>
      <div style={{ backgroundColor: "#f8f9fb" }}>
        <Box
          sx={{
            margin: "0 auto",
            width: "70%",
            my: 5,
          }}
        >
          <Stack
            sx={{
              backgroundImage: "url(/images/solutions/banking/benefit2.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
              backgroundSize: "600px 400px",
              height: "500px",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Card raised>
              <CardContent sx={{ width: "500px", p: 5 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                >
                  Combat fraud
                </Typography>

                <ul>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Identify and scrutinize potential account posing threat
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Real-time alerts to manage cases with less human
                      intervention
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Profiling of customer behavior
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </div>

      <Box
        sx={{
          margin: "0 auto",
          width: "70%",
          my: 3,
        }}
      >
        <Stack direction="column">
          <Stack
            sx={{
              backgroundImage: "url(/images/solutions/banking/benefit3.png)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              // backgroundSize: "600px 400px",

              // height: "500px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card raised>
              <CardContent sx={{ width: "500px", p: 5 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, color: Colors.airaPrimary, mb: 2 }}
                >
                  Improve compliance process quality
                </Typography>

                <ul>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Track regulatory changes
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Automate monitoring of ongoing transactions
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitl2" sx={{ lineHeight: 2 }}>
                      Improve KYC/AML analysis with easy access to customer data
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Stack>
          {/* BENEFITS ends*/}
        </Stack>
      </Box>

      <div
        style={{
          position: "absolute",
          top: 50,
        }}
      >
        <AIRAMonoLinesLeft />
      </div>
    </Box>
  )
}

export default index