import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Divider
} from "@mui/material";
import '../../../styles/Home.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Colors from '@/common/Colorscomponents';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs";
import { LiaCoinsSolid } from "react-icons/lia";
import BtnLeftImageRightCard from '@/common/BtnLeftImageRightCardcomponents';
import BtnRightImageLeftCard from '@/common/BtnRightImageLeftCardcomponents';
import _ from "lodash";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const IMGBASEURL = "/images/careers";

const LR_ITEMS = [
  {
    cardTitle: "Internship Programs",
    cardDesc:
      "Explore a wide range of opportunities for graduate and postgraduate students to get a perfect kickstart for their technical career.",
    imgSrc: `reach_out_1.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "right",
  },
  {
    cardTitle: "Entry Level Opportunities",
    cardDesc:
      "Inviting entry level professionals for a chance to start your career and explore how you can transform the world.",
    imgSrc: `reach_out_2.png`,
    btnText: "Reach Out",
    type: "reach_out",
    direction: "left",
  },
  {
    cardTitle: "Senior Level Opportunities",
    cardDesc:
      "Inviting exceptional leaders and subject matter experts to guide the teams at AIRA and help them take the brand to the next level.",
    imgSrc: `reach_out_3.png`,
    btnText: "Explore Positions",
    type: "explore_positions",
    direction: "right",
  },
];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 3 }}>
          <Stack direction={'row'} alignItems={'center'}>
            <HiChevronLeft size={16} color={Colors.airaSecondary} />
            <Typography sx={{ px: 2 }} color={Colors.airaSecondary}>{index + 1} / 4</Typography>
            <HiChevronRight size={16} color={Colors.airaSecondary} />
          </Stack>
          {children}
        </Card>
      )}
    </div>
  );
}

function TabPanelNew(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Card sx={{ p: 3 }}>
          <Stack direction={'row'} alignItems={'center'}>
            <HiChevronLeft size={16} color={Colors.airaSecondary} />
            <Typography sx={{ px: 2 }} color={Colors.airaSecondary}>{index + 1} / 4</Typography>
            <HiChevronRight size={16} color={Colors.airaSecondary} />
          </Stack>
          {children}
        </Card>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiTabsIndicator: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          color: '#fff',
          backgroundColor: '#6755DF',
          borderRadius: '8px',
          width: '100%'
        },
      },
    },
  },
});

const Index = () => {
  const [value, setValue] = React.useState(0);
  const [newValue, setNewValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeNew = (event, newValue) => {
    setNewValue(newValue)
  }

  return (
    <ThemeProvider theme={theme}>
      <Box width="100" >
        <Box sx={{ backgroundColor: "##F8F9FB", position: "relative", pt: { xs: 0, lg: 10 } }}>
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
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      Hyper-automation Solution <br />
                      <span style={{ color: Colors.airaSecondary }}>
                        Give banking automation a try
                      </span>
                    </Typography>
                    <Typography variant="body1" sx={{ my: 3 }}>
                      In todays banks, the value of automation might be the only thing that isnt transitory
                    </Typography>
                  </Box>
                </Stack>
              </Container>
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

        <Box sx={{ backgroundColor: '#6755DF', py: 10, mt: 10 }}>
          <Container maxWidth="lg">
            <Grid container spacing={12}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px' }}>
                  <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography color={'#6755DF'}>
                      McKinsey
                    </Typography>
                    <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                      43 %
                    </Typography>
                    <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                      of banking processes can be automated
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                      <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                        <Typography sx={{ mr: 1 }}>
                          Learn more
                        </Typography>
                        <BsArrowRight size={25} color='#6755DF' />
                      </Stack>
                    </Link>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px' }}>
                  <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography color={'#6755DF'}>
                      McKinsey
                    </Typography>
                    <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                      43 %
                    </Typography>
                    <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                      of banking processes can be automated
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                      <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                        <Typography sx={{ mr: 1 }}>
                          Learn more
                        </Typography>
                        <BsArrowRight size={25} color='#6755DF' />
                      </Stack>
                    </Link>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 4, backgroundColor: '#f1f1f1', borderRadius: '24px' }}>
                  <Stack direction={'column'} alignItems={'center'} justifyContent={'center'}>
                    <Typography color={'#6755DF'}>
                      McKinsey
                    </Typography>
                    <Typography variant='h2' color={'#6755DF'} fontWeight={'bold'}>
                      43 %
                    </Typography>
                    <Typography color={'#6755DF'} sx={{ textAlign: 'center' }}>
                      of banking processes can be automated
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#6755DF' }} href="/">
                      <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                        <Typography sx={{ mr: 1 }}>
                          Learn more
                        </Typography>
                        <BsArrowRight size={25} color='#6755DF' />
                      </Stack>
                    </Link>
                  </Stack>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ background: '#fff', py: 10 }}>
          <Container maxWidth='lg'>
            <Stack>
              <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
                Full banking <span style={{ color: Colors.airaSecondary }}>automation coverage</span>
              </Typography>
              <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2.5 }}>
                In a world of point solutions, the UiPath Business Automation Platform does it all
              </Typography>
            </Stack>
            <Grid container spacing={2} justifyContent={'center'} sx={{ mt: 3 }}>
              <Grid item xs={12} md={3}>
                <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                  <LiaCoinsSolid size={30} color='#ffffff' />
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                    Increase revenue capture
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                    Remove manual touch points and enable straight-through processing
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                  <LiaCoinsSolid size={30} color='#ffffff' />
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                    Increase revenue capture
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                    Remove manual touch points and enable straight-through processing
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                  <LiaCoinsSolid size={30} color='#ffffff' />
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                    Increase revenue capture
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                    Remove manual touch points and enable straight-through processing
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={12} md={3}>
                <Stack direction={'column'} alignItems={'center'} sx={{ backgroundColor: '#6755DF', p: 3, borderRadius: '16px' }}>
                  <LiaCoinsSolid size={30} color='#ffffff' />
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'16px'} fontWeight={'700'} color={'#fff'}>
                    Increase revenue capture
                  </Typography>
                  <Typography sx={{ mt: 0.5 }} textAlign={'center'} fontSize={'14px'} fontWeight={'400'} color={'#fff'}>
                    Remove manual touch points and enable straight-through processing
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Box
            sx={{ my: 10 }}
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
                  <Box sx={{ backgroundColor: '#f1f1f1', height: '100%' }}>

                  </Box>
                  {/* <Image
                  src="/images/solutions/banking/compliance.png"
                  alt="bankingheader"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                /> */}
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
        </Container>

        <Box sx={{ my: 5 }}>
          <Container maxWidth="lg">
            <Grid container justifyContent={'center'} alignItems={'center'} spacing={4}>
              <Grid item xs={12} md={5}>
                <Image
                  src={'/images/has/rectangle48.png'}
                  alt='has'
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
              </Grid>
              <Grid item xs={12} md={7}>
                <Typography fontSize={32} fontWeight={700} color={Colors.black}>
                  <span style={{ color: Colors.airaSecondary }}>Learn to automate </span> with Truist, Wells Fargo, Bain & Company, BNY Mellon | Pershing, JP Morgan Chase, Cowen, and more
                </Typography>
                <Button
                  variant='contained'
                  endIcon={<ArrowForwardIcon />}
                  sx={{ borderRadius: '50px', backgroundColor: Colors.airaPrimary, mt: 2 }}
                >
                  Send me the recording
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container maxWidth="md">
          <Divider sx={{ my: 8 }} light />
        </Container>

        <Box sx={{ my: 10 }}>
          <Container maxWidth="lg">
            <Typography textAlign={'center'} fontSize={18}>
              TOP AUTOMATION AREAS
            </Typography>
            <Typography textAlign={'center'} fontSize={40} fontWeight={700}>
              <span style={{ color: Colors.airaPrimary }}>Banking and Financial</span> Services Automation
            </Typography>

            <Box sx={{ mx: "auto", my: 3 }} gap={1}>
              <Grid container direction="row">
                <Grid item xs={12} sm={5}>
                  <Image
                    src="/images/has/rectangle49.png"
                    alt="rectangle49"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "12px",
                      zindex: -1,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
                  <Card
                    raised
                    sx={{
                      borderRadius: "12px",
                      ml: { xs: "0%", md: "-20%" },
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <CardContent sx={{ pl: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: Colors.airaSecondary, fontWeight: 600, mb: 1 }}
                      >
                        Consumer Banking
                      </Typography>
                      <Typography fontSize={20} fontWeight={600}>
                        Efficient workflows appraise high. Capture that value with automation.
                      </Typography>
                      <Typography sx={{ mt: 3 }} fontSize={16} fontWeight={400}>
                        UiPath delivers a new standard in efficiency. By elevating customer journeys, accelerating lending timelines, and modernizing KYC, automation brings Consumer Banks into todays digital age. And shortly thereafter, helps them revolutionize their entire way of operating (and innovating!)
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>



        {/* <Box sx={{ backgroundColor: '#F0F0F0', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to UiPath—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to UiPath—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{
                width: '100%',
                height: '200px',
                backgroundImage: `url(https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
              >
              </Box>
              <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  CASE STUDY
                </Typography>
                <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                  A Complete Guide to UiPath—made in collaboration with ERP Today
                </Typography>
                <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                  Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                </Typography>
                <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                  <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                    <Typography sx={{ mr: 1 }}>
                      Read More
                    </Typography>
                    <BsArrowRight size={25} color='#FFAF00' />
                  </Stack>
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box> */}

        {/* <Container maxWidth="lg" sx={{ my: 10 }}>
        <Stack gap={4}>
          {LR_ITEMS.map((lrItem, lrIdx) => {
            let { direction, imgSrc, ...restItems } = lrItem;
            imgSrc = `${IMGBASEURL}/${imgSrc}`;
            return (
              <Box key={lrIdx} gap={1}>
                {_.isEqual(direction, "left") ? (
                  <BtnLeftImageRightCard imgSrc={imgSrc} {...restItems} />
                ) : (
                  <BtnRightImageLeftCard imgSrc={imgSrc} {...restItems} />
                )}
              </Box>
            );
          })}
        </Stack>
      </Container> */}

        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={5}>
              <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
              >
                <Tab label="Lending" {...a11yProps(0)} />
                <Tab label="Customer Experience" {...a11yProps(1)} />
                <Tab label="Cards and Payments" {...a11yProps(2)} />
                <Tab label="Risk & Compliance" {...a11yProps(3)} />
              </Tabs>
            </Grid>
            <Grid item xs={12} md={7}>
              <TabPanel value={value} index={0}>
                <Stack direction={'column'}>
                  <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                    Lending
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                    Inefficient lending cycles? We can lend a hand
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                    Automation helps shorten the lending cycle by digitizing documents, automating mundane tasks, and giving agents a digital sidekick.
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                    Business Use Cases:
                  </Typography>
                  <ul>
                    <li>Origination</li>
                    <li>Loan Processing</li>
                    <li>Underwriting</li>
                    <li>Funding</li>
                    <li>Administration & Monitoring</li>
                    <li>Default Management</li>
                  </ul>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Customer Experience
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Inefficient lending cycles? We can lend a hand
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps shorten the lending cycle by digitizing documents, automating mundane tasks, and giving agents a digital sidekick.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Origination</li>
                  <li>Loan Processing</li>
                  <li>Underwriting</li>
                  <li>Funding</li>
                  <li>Administration & Monitoring</li>
                  <li>Default Management</li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Cards and Payments
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Inefficient lending cycles? We can lend a hand
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps shorten the lending cycle by digitizing documents, automating mundane tasks, and giving agents a digital sidekick.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Origination</li>
                  <li>Loan Processing</li>
                  <li>Underwriting</li>
                  <li>Funding</li>
                  <li>Administration & Monitoring</li>
                  <li>Default Management</li>
                </ul>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Risk & Compliance
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Inefficient lending cycles? We can lend a hand
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps shorten the lending cycle by digitizing documents, automating mundane tasks, and giving agents a digital sidekick.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Origination</li>
                  <li>Loan Processing</li>
                  <li>Underwriting</li>
                  <li>Funding</li>
                  <li>Administration & Monitoring</li>
                  <li>Default Management</li>
                </ul>
              </TabPanel>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ my: 10 }}>
          <Container maxWidth="lg">
            <Box sx={{ mx: "auto" }} gap={1}>
              <Grid container direction="row-reverse">
                <Grid item xs={12} sm={5}>
                  <Image
                    src="/images/has/rectangle50.png"
                    alt="rectangle49"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: "12px",
                      zindex: -1,
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={5} justifySelf="center" alignSelf="center">
                  <Card
                    raised
                    sx={{
                      borderRadius: "12px",
                      mr: { xs: "0%", md: "-20%" },
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    <CardContent sx={{ pl: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{ color: Colors.airaSecondary, fontWeight: 600, mb: 1 }}
                      >
                        Comercial Banking
                      </Typography>
                      <Typography fontSize={20} fontWeight={600}>
                        Efficient workflows appraise high. Capture that value with automation.
                      </Typography>
                      <Typography sx={{ mt: 3 }} fontSize={16} fontWeight={400}>
                        UiPath delivers a new standard in efficiency. By elevating customer journeys, accelerating lending timelines, and modernizing KYC, automation brings Consumer Banks into todays digital age. And shortly thereafter, helps them revolutionize their entire way of operating (and innovating!)
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>

        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={5}>
              <Tabs
                orientation="vertical"
                value={newValue}
                onChange={handleChangeNew}
                aria-label="Vertical tabs example"
              // TabIndicatorProps={{
              //   style: {
              //     backgroundColor: '#6755DF',
              //     color: "fff",
              //     borderRadius: '8px',
              //     width: '100%',
              //     zindex: '-1 !important'
              //   }
              // }}
              >
                <Tab label="Liquidity & Treasury" {...a11yProps(0)} />
                <Tab label="Commercial Lending" {...a11yProps(1)} />
                <Tab label="Client Management" {...a11yProps(2)} />
                <Tab label="Risk & Compliance" {...a11yProps(3)} />
              </Tabs>
            </Grid>
            <Grid item xs={12} md={7}>
              <TabPanelNew value={newValue} index={0}>
                <Stack direction={'column'}>
                  <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                    Liquidity & Treasury
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                    Trade risky and tedious for streamlined and secured
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                    Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience.
                  </Typography>
                  <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                    Business Use Cases:
                  </Typography>
                  <ul>
                    <li>Order Management</li>
                    <li>Order Processing</li>
                    <li>Fee Management</li>
                    <li>Customer Support</li>
                  </ul>
                </Stack>
              </TabPanelNew>
              <TabPanelNew value={newValue} index={1}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Commercial Lending
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Trade risky and tedious for streamlined and secured
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Order Management</li>
                  <li>Order Processing</li>
                  <li>Fee Management</li>
                  <li>Customer Support</li>
                </ul>
              </TabPanelNew>
              <TabPanelNew value={newValue} index={2}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Client Management
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Trade risky and tedious for streamlined and secured
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Order Management</li>
                  <li>Order Processing</li>
                  <li>Fee Management</li>
                  <li>Customer Support</li>
                </ul>
              </TabPanelNew>
              <TabPanelNew value={newValue} index={3}>
                <Typography color={Colors.airaPrimary} fontWeight={700} fontSize={'24px'}>
                  Risk & Compliance
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Trade risky and tedious for streamlined and secured
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={400} fontSize={'16px'}>
                  Automation helps banks streamline treasury operations by increasing productivity for front office traders, enabling better risk management, and improving customer experience.
                </Typography>
                <Typography sx={{ pt: 2 }} color={Colors.black} fontWeight={600} fontSize={'20px'}>
                  Business Use Cases:
                </Typography>
                <ul>
                  <li>Order Management</li>
                  <li>Order Processing</li>
                  <li>Fee Management</li>
                  <li>Customer Support</li>
                </ul>
              </TabPanelNew>
            </Grid>
          </Grid>
        </Container>

        <Box sx={{ backgroundColor: '#F0F0F0', py: 10, my: 5 }}>
          <Container maxWidth="lg">
            <Stack>
              <Typography fontSize={'40px'} variant="h4" sx={{ fontWeight: 700, textAlign: 'center' }}>
                More <span style={{ color: Colors.airaSecondary }}>in Banking Automation</span>
              </Typography>
              <Typography textAlign={'center'} fontSize={'20'} sx={{ mt: 2, mb: 4 }}>
                Dont miss these resources, upcoming events, and recaps
              </Typography>
            </Stack>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                >
                </Box>
                <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                  <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    WHITE PAPER
                  </Typography>
                  <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                  <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Read More
                      </Typography>
                      <BsArrowRight size={25} color='#FFAF00' />
                    </Stack>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                >
                </Box>
                <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                  <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    WEBINAR
                  </Typography>
                  <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                  <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Read More
                      </Typography>
                      <BsArrowRight size={25} color='#FFAF00' />
                    </Stack>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{
                  width: '100%',
                  height: '200px',
                  backgroundImage: `url(https://images.pexels.com/photos/8728380/pexels-photo-8728380.jpeg)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover"
                }}
                >
                </Box>
                <Stack direction={'column'} sx={{ backgroundColor: '#fff', p: 3 }} >
                  <Typography fontSize={'14px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    WHITE PAPER
                  </Typography>
                  <Typography lineHeight={'28px'} fontSize={'20px'} color={'#6755DF'} sx={{ mt: 1 }}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography fontSize={'16px'} sx={{ mt: 1 }}>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                  <Link style={{ textDecoration: 'none', color: '#FFAF00' }} href="/">
                    <Stack sx={{ mt: 3 }} direction={'row'} alignItems={'center'}>
                      <Typography sx={{ mr: 1 }}>
                        Read More
                      </Typography>
                      <BsArrowRight size={25} color='#FFAF00' />
                    </Stack>
                  </Link>
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
    </ThemeProvider>
  )
}

export default Index