import Head from 'next/head'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import styles from '../styles/Home.module.css'
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import RoundedButton from '@/components/RoundedButton/RoundedButtoncomponents';
import ESImage from '@/common/ESImagecomponents';
import macBookImage from '../../public/images/home/macbook.svg'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const montserrat = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

const EBONYHEIGHT = "600";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ pt: 9 }}>
        <main className={montserrat.className}>
          <Paper sx={{ mt: 2, position: "relative" }} elevation={0}>
            <Grid container spacing={1}>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={12}
                md={9}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: `${EBONYHEIGHT}px`,
                }}
              >
                <Stack
                  gap={4}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    zIndex: 2,
                    paddingLeft: "100px",
                  }}
                >
                  <Stack direction="column">
                    <Typography variant="h4" sx={{ fontWeight: 800 }}>
                      Revolutionize Your Productivity With{" "}
                      <span style={{ color: Colors.airaSecondary }}>
                        AI Automation
                      </span>
                    </Typography>

                    <Typography variant="body1" sx={{ mt: 3 }}>
                      <span style={{ fontWeight: 700 }}>
                        Artificially Intelligent Robotic Automation,
                      </span>{" "}
                      Say goodbye to manual tasks and hello to a more efficient and
                      profitable enterprise.
                    </Typography>
                    <div>
                      <RoundedButton label="Request Demo" sx={{ mt: 3 }} />
                    </div>
                  </Stack>
                  <div
                    style={{
                      zIndex: 2,
                      alignSelf: "flex-end",
                      paddingLeft: "30px",
                    }}
                  >
                    <ESImage
                      priority
                      src={macBookImage}
                      alt="AIRA Macbook"
                      width="430px"
                      height="230px"
                      style={{
                        zIndex: 2,
                      }}
                    />
                  </div>
                </Stack>
              </Grid>
            </Grid>
            <Stack
              direction="row"
              gap={10}
              sx={{ width: "70%", margin: "0 auto", py: 10 }}
            >
              <div style={{ position: "relative" }}>
                <div
                  style={{
                    height: "140px",
                    width: "40px",
                    position: "absolute",
                    transform: "rotate(35deg)",
                    borderRadius: "50px",
                    backgroundColor: Colors.airaPrimary,
                    top: 150,
                    marginLeft: "-30px",
                  }}
                ></div>
                <div
                  style={{
                    height: "140px",
                    width: "40px",
                    top: 200,
                    transform: "rotate(35deg)",
                    position: "absolute",
                    borderRadius: "50px",
                    backgroundColor: Colors.airaSecondary,
                  }}
                ></div>
                <div
                  style={{
                    height: "140px",
                    width: "40px",
                    transform: "rotate(35deg)",
                    top: 250,
                    position: "absolute",
                    borderRadius: "50px",
                    marginLeft: "35px",
                    border: `1px solid ${Colors.airaPrimary}`,
                  }}
                ></div>
                <img
                  src="/images/home/learnmore.png"
                  alt="Learn More"
                  height={400}
                  width={400}
                  style={{
                    zIndex: 2,
                  }}
                />
              </div>
              <Stack direction="column" sx={{ py: 2 }}>
                <Typography variant="h5" sx={{ fontsize: "20 px", fontWeight: 700 }}>
                  <span style={{ color: Colors.airaSecondary }}>AIRA:</span>{" "}
                  Artificially Intelligent Robotic Automation
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, fontWeight: 600 }}>
                  Automated Bots for your Digital Transformation
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, lineHeight: 2 }}>
                  Introducing AIRA, an AI and ML-powered digital agent that automates
                  your everyday tasks and business processes through robotic
                  automation. It integrates with digital technologies and legacy
                  systems, freeing your workforce from low-output tasks. With AIRA,
                  you can create personalised low-code/no-code automated workflows.
                </Typography>
                <div>
                  <RoundedButton label="Learn more" sx={{ mt: 3 }} />
                </div>
              </Stack>
            </Stack>

            <Stack sx={{ width: "60%", margin: "0 auto" }}>
              {/* <DiscoverStack /> */}
              <Box sx={{ alignSelf: "center", pt: 3 }}>
                <RoundedButton label="Try AIRA" sx={{ px: 5 }} />
              </Box>
            </Stack>

            <Box sx={{ my: 6 }}>
              {/* <ReferencesStack /> */}
            </Box>

            <Box sx={{ width: "70%", margin: "0 auto" }}>
              {/* <PowerOfIntelligence /> */}
            </Box>

            <Box sx={{ my: 5 }}>
              {/* <Offering /> */}
            </Box>

            <Box sx={{ width: "80%", margin: "0 auto", my: 10 }}>
              {/* <ConnectToSystem /> */}
            </Box>

            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
              }}
            >
              <img
                src="/images/home/ebony.png"
                alt="contact us"
                width="100%"
                height={EBONYHEIGHT}
                style={{
                  zIndex: 1,
                  marginRight: "10px",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 100,
              }}
            >
              <AIRAMonoLinesLeft />
            </div>
          </Paper>
        </main>
      </Box>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'footer',
      ])),
      // Will be passed to the page component as props
    },
  }
}
