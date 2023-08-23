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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FiCheckCircle } from "react-icons/fi";

const AIRAButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#6755DF',
  color: '#ffffff',
  borderColor: '#6755DF',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#6755DF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#6755DF',
    borderColor: '#6755DF',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(103, 85, 223, 1)',
  },
});

const AIRAButtonOutline = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: 'none',
  lineHeight: 1.5,
  backgroundColor: 'transparent',
  color: '#FFAF00',
  borderColor: '#6755DF',
  '&:hover': {
    backgroundColor: '#ffe2aa',
    borderColor: '#6755DF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#6755DF',
    borderColor: '#FFAF00',
  }
});


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
                  <span style={{ color: Colors.airaSecondary }}>
                    Pricing
                  </span>
                </Typography>
                <Typography>
                  Plans to fit your needs, today, and tomorrow. Explore a complete UiPath enterprise solution for your business.
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/pricing.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ my: 10, backgroundColor: '#dedbdb4d', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Stack
                sx={{ backgroundColor: '#fff', py: 4, px: 6, borderRadius: '16px', minHeight: '750px' }}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Typography sx={{ my: 2 }} textAlign={'center'} fontSize={'20px'} fontWeight={700} color={'#6755DF'}>Free</Typography>
                  <Typography>Access to personal use of development and attended capabilities for free.</Typography>
                  <ul>
                    <li>Unlimited individual automation runs</li>
                    <li>Tools for designing individual automations</li>
                    <li>Prebuilt, best-in-class integrations with many popular products</li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Start Free
                </AIRAButton>
              </Stack>
            </Grid>
            {/* Pro */}
            <Grid item xs={12} md={4}>
              <Stack
                sx={{ backgroundColor: '#fff', py: 4, px: 6, borderRadius: '16px', minHeight: '750px' }}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Typography sx={{ my: 2 }} textAlign={'center'} fontSize={'20px'} fontWeight={700} color={'#6755DF'}>Pro</Typography>
                  <Typography>Pre-packaged plans make it easy for smaller departments or businesses to start automating, looking for multiple tenants and dedicated support.</Typography>
                  <ul>
                    <li>Robots to enable remote, on-demand execution</li>
                    <li>Advanced automation design tools with user governance</li>
                    <li>Additional products to engage people and robots for seamless process collaboration</li>
                    <li>UiPath Standard Support</li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Try Then Buy
                </AIRAButton>
              </Stack>
            </Grid>
            {/* Enterprise */}
            <Grid item xs={12} md={4}>
              <Stack
                sx={{ backgroundColor: '#fff', py: 4, px: 6, borderRadius: '16px', minHeight: '750px' }}
                direction={'column'}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Box>
                  <Typography sx={{ my: 2 }} textAlign={'center'} fontSize={'20px'} fontWeight={700} color={'#6755DF'}>Enterprise</Typography>
                  <Typography>Flexible service offerings for companies seeking a comprehensive platform that fits their needs. This plan offers the best UiPath solutions—whether in the UiPath cloud, your dedicated cloud, or on-premises, with support packages.</Typography>
                  <ul>
                    <li>Execute automated tests and RPA workflows with Test Robots</li>
                    <li>100 Automation Express licenses free</li>
                    <li>Additional products—process discovery, test management, AI, analytics for speed-to-value</li>
                    <li>Flexible multi-region deployment</li>
                    <li>Advanced authentication management</li>
                  </ul>
                </Box>

                <AIRAButton endIcon={<ArrowForwardIcon />}>
                  Contact Sales
                </AIRAButton>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Typography sx={{ mb: 5 }} textAlign={'center'} color={'#FFAF00'} fontSize={'32px'} fontWeight={700}>
            See full comparison of our offerings
          </Typography>
          <Box sx={{ my: 10, overflowX: 'auto', width: '100%', display: 'block' }}>
            <table>
              <tbody>
                <tr>
                  <th></th>
                  <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Free
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      CLOUD
                    </Typography>
                  </th>
                  <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Pro
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      CLOUD
                    </Typography>
                  </th>
                  <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Pro Trial
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      CLOUD
                    </Typography>
                  </th>
                  <th>
                    <Typography color={'#6755DF'} fontSize={'20px'} fontWeight={600}>
                      Enterprise
                    </Typography>
                    <Typography color={'#000000'} fontSize={'16px'} fontWeight={600}>
                      Cloud <br /> On-Premises
                    </Typography>
                  </th>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      DISCOVER AUTOMATION OPPORTUNITIES <br /> POWERED BY AI AND YOUR PEOPLE
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Automation Hub
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Task Capture
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Process Minig
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Task Minig
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      BUILD AND TEST AUTOMATION QUICKLY, FROM <br /> THE SIMPLE TO THE ADVANCED
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Automation Express
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Studio
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Automation Ops
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Document Understanding
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Integration Service
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      BUILD AND TEST AUTOMATION QUICKLY, FROM <br /> THE SIMPLE TO THE ADVANCED
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Orchestrator
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Data Service
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Test Manager
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      AI Center
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Insights
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      RUN AUTOMATIONS THROUGH ROBOTS THAT <br /> WORK WITH YOUR APPLICATIONS AND DATA
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Automation Cloud Robots
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Unattended Robots
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Attended Robots
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Test Robots
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      ENGAGE PEOPLE AND ROBOTS AS ONE TEAM <br /> FOR SEAMLESS PROCESS COLLABORATION
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Apps
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Action Center
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      ADMINISTRATION & SUPPORT
                    </Typography>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Tenants
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
                <tr>
                  <td>
                    <Typography fontSize={'12px'} fontWeight={600} lineHeight={'18px'}>
                      Standard Support
                    </Typography>
                    <Typography fontSize={'12px'} fontWeight={600} color={'#787878'} lineHeight={'18px'}>
                      Additional Support options are available
                    </Typography>
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                  <td><FiCheckCircle size={25} color='#6755df' /></td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Container>
      </Box>

      <Box sx={{ mb: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  backgroundColor: '#F1F0FF',
                  p: 2,
                  borderRadius: '16px'
                }}
                direction={'row'}
              >
                <Box sx={{ pr: 2 }}>
                  <Image
                    src="/images/person-graduate.png"
                    alt='person'
                    width={50}
                    height={50}
                  />
                </Box>
                <Box>
                  <Typography color={'#6755DF'} fontSize={'18px'} fontWeight={600}>
                    Academy
                  </Typography>
                  <Typography fontSize={'14px'} fontWeight={400}>
                    Learn today the skills of the future with free <br /> online RPA training.
                  </Typography>
                  <AIRAButtonOutline sx={{ mt: 3 }} endIcon={<ArrowForwardIcon />}>
                    Start Learning
                  </AIRAButtonOutline>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                sx={{
                  backgroundColor: '#F1F0FF',
                  p: 2,
                  borderRadius: '16px'
                }}
                direction={'row'}
              >
                <Box sx={{ pr: 2 }}>
                  <Image
                    src="/images/person-graduate.png"
                    alt='person'
                    width={50}
                    height={50}
                  />
                </Box>
                <Box>
                  <Typography color={'#6755DF'} fontSize={'18px'} fontWeight={600}>
                    Marketplace
                  </Typography>
                  <Typography fontSize={'14px'} fontWeight={400}>
                    Access an extensive library of <br /> hundreds of reusable RPA components.
                  </Typography>
                  <AIRAButtonOutline sx={{ mt: 3 }} endIcon={<ArrowForwardIcon />}>
                    Explore Marketplace
                  </AIRAButtonOutline>
                </Box>
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