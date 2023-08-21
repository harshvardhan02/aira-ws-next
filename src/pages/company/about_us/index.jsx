import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  Container
} from "@mui/material";
import Image from 'next/image';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import { styled } from '@mui/material/styles';

const InputField = styled('input')({
  display: 'block',
  width: '100%',
  padding: '0.375rem 0.75rem',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: 1.5,
  color: '#212529',
  backgroundColor: '#fff',
  backgroundClip: 'padding-box',
  border: '1px solid #ced4da',
  appearance: 'none',
  borderRadius: '0.375rem',
  transition: 'border-color .15s ease -in -out, box - shadow .15s ease -in -out'
})

const IMGBASEURL = "/images/blogs";

const DISCOVER_ITEMS = [
  {
    title: "One team, one goal",
    desc: "We dream big and achieve those dreams by working hard for it, every single day.",
    icon: "goal.png",
  },
  {
    title: "Creativity",
    desc: "We are innovators who are focused to implement the most creative ideas to deliver distinguished results.",
    icon: "creativity.png",
  },
  {
    title: "Integrity",
    desc: "Committed to staying honest to whatever we commit to, no matter what the consequences.",
    icon: "integrity.png",
  },
  {
    title: "Communication",
    desc: "Clear information exchange and acknowledgment of efforts to build a healthy relationship on every front.",
    icon: "communication.png",
  },
];

const OUR_TEAM = [
  { id: "1", name: "Aziz", position: "Chairman", image: "aziz.png" },
  {
    id: "1",
    name: "Shashwat",
    position: "Chief Technology Officer",
    image: "shashwat.png",
  },
  {
    id: "1",
    name: "Franck",
    position: "Chief Financial Officer",
    image: "franck.png",
  },
  {
    id: "1",
    name: "Kubra",
    position: "Head of Administration",
    image: "kubra.png",
  },
  {
    id: "1",
    name: "Thomas",
    position: "Head of Sales and Marketing",
    image: "thomas.png",
  },
];

const QUICKFACTS = [
  { id: 1, title: "Customer First Approach", icon: "customer.png" },
  {
    id: 2,
    title: "One-stop Marketplace for Automation",
    icon: "marketplace.png",
  },
  {
    id: 3,
    title: "Solutions that Simplify Real-World Problems",
    icon: "solution.png",
  },
  { id: 4, title: "24/7 Customer Support and Services", icon: "support.png" },
];


const index = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: 9 }}>
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
          <Container maxWidth="lg">
            <Stack sx={{ mt: 10 }}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    color: "#200E32",
                    // marginLeft: "100px",
                  }}
                >
                  Democratizing Automation <br />
                  <span style={{ color: Colors.airaSecondary }}>
                    for Future-Ready <br /> Performance
                  </span>
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/aboutus/about_us_header.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid>
      </Grid>

      <Container maxWidth="lg">
        <Grid
          sx={{ pt: 4 }}
          container
          spacing={5}
          justifyContent="left"
          alignItems="center"
        >
          <Grid item xs={12} md={6}>
            <div style={{ position: "relative" }}>
              {/* <div
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
              ></div> */}
              <Grid item container justifyContent={{ xs: "center", md: "flex-end" }}>
                <Image
                  src="/images/aboutus/au_commitment.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '75%', height: 'auto', zIndex: 2 }}
                />
              </Grid>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction="column" sx={{ py: 2 }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                AIRA: Committed to build a technology driven future
              </Typography>

              <Typography variant="subtitle1" sx={{ lineHeight: 2 }}>
                Our mission is what inspires us to take up the responsibility of
                making the world a better place through automation technologies.
                We undertake every possible endeavor to expand human capabilities
                and impact communities through groundbreaking innovations. At
                every step, we strive to abide by our goal-
                <span style={{ fontWeight: 600 }}>
                  Enabling transformation through intelligent automation to create
                  value for our people, partners, and communities
                </span>{" "}
                . AIRA aims to use the power of automation to move the world
                forward. As a leading next-generation technology company, we aim
                to deliver a fresh perspective to how the business processes can
                evolve.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="md">
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 600, textAlign: "center", lineheight: 2, my: 2 }}
        >
          At AIRA, we aren’t afraid to take risks because we believe in evolving
          with failures. We erase boundaries that restrict us from learning and
          advancing and take big, bold steps that create lasting results.
        </Typography>
      </Container>

      <Box sx={{ backgroundColor: "#F8F9FB" }}>
        <Container maxWidth="lg">
          <Box sx={{ pb: 8, }}>
            <Stack
              direction="row"
              gap={1}
              sx={{ pt: 4 }}
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                <span style={{ color: Colors.airaSecondary }}>Values </span>
                of AIRA
              </Typography>
            </Stack>

            <Grid container spacing={3} sx={{ my: 3 }}>
              {DISCOVER_ITEMS.map((item, idx) => {
                let { title, desc, icon } = item;
                return (
                  <Grid item xs={12} sm={3} key={idx}>
                    <Stack
                      direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <div>
                        <Image
                          src={`/images/aboutus/airavalues/${icon}`}
                          alt={title}
                          height={60}
                          width={60}
                        />
                      </div>
                      <Typography
                        variant="caption"
                        sx={{
                          pt: 1,
                          fontSize: "16px",
                          fontWeight: 600,
                          textAlign: "center",
                        }}
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          textAlign: "center",
                          color: "#200E32",
                          lineHeight: "22px",
                        }}
                      >
                        {desc}
                      </Typography>
                    </Stack>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, textAlign: "center" }}>
            Meet our team
          </Typography>
          <Typography
            variant="body1"
            sx={{ textAlign: "center", my: 2, lineHeight: 2 }}
          >
            To think big and create a world of difference, takes an enthusiastic,
            dedicated, and experienced team. At AIRA, we take pride to be led by a
            diverse global team of highly proficient leaders and subject matter
            experts that bring intellectual rigor to define and advance the
            intelligent automation industry.
          </Typography>

          <Grid container spacing={2} justifyContent="center">
            {OUR_TEAM.map((person, idx) => {
              const { name, image, position } = person;
              return (
                <Grid
                  key={idx}
                  item
                  container
                  xs={6}
                  md={12 / 5}
                  justifyContent={"center"}
                  alignItems={"center"}
                  flexDirection={"column"}
                >
                  <Box>
                    <Image
                      src={`/images/aboutus/ourteam/${image}`}
                      alt={"shashwat.png"}
                      height={130}
                      width={130}
                    />
                  </Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: Colors.airaPrimary,
                        textAlign: "center",
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        textAlign: "center",
                        fontSize: "13px",
                        color: "text.primary",
                      }}
                    >
                      {position}
                    </Typography>
                  </Box>

                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#6755DF", my: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={5} sx={{ py: 5, pb: 10 }}>
            <Grid item xs={12} sm={6}>
              <Stack direction="column">
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600 }}
                // color="common.white"
                >
                  AIRA <br /> Quick Facts
                </Typography>

                <Typography variant="subtitle2" sx={{ my: 2 }} color="common.white">
                  When you work with us, transformation becomes more rigorous,
                  dynamic, and powerful than ever.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="column" gap={2}>
                {QUICKFACTS.map((factItem, idx) => {
                  const { title, id, icon } = factItem;
                  return (
                    <Stack direction="row" gap={1} alignItems="center" key={id}>
                      <Image
                        src={`/images/aboutus/airaquickfact/${icon}`}
                        alt={title}
                        height={30}
                        width={30}
                      />
                      <Typography variant="subtitle2" color="common.white">
                        {title}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        style={{
          position: "absolute",
          top: 50,
          zIndex: -1
        }}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <AIRAMonoLinesLeft />
      </Box>
    </Box>
  )
}

export default index