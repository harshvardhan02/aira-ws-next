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
import { IoDocumentTextOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const index = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
                    Testimonials
                  </span>
                </Typography>
                <Typography fontSize={18} sx={{ pr: 10, mt: 2 }}>
                  We take great pride in the satisfaction of our customers, and this page is dedicated to showcasing their experiences and feedback. We believe that theres no better way to understand the value of our products/services than through the words of those who have already benefited from them
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`/images/testimonials/image.png`}
              alt="bankingheader"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </Grid>
      </Grid>

      <Box sx={{ my: 15 }}>
        <Container maxWidth="lg">
          <Grid container justifyContent={'center'}>
            <Grid item xs={12} md={7}>
              <Slider {...settings}>
                <Card>
                  <CardContent>
                    <Stack direction={'column'} alignItems={'center'}>
                      <Image
                        src="/images/ellipse47.png"
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography sx={{ py: 1.5 }} fontSize={'32px'} color={'#6755DF'} fontWeight={700}>Jeanne Dern</Typography>
                      <Typography sx={{ pb: 1 }} fontSize={'24px'} color={'#FFAF00'} fontWeight={500}>ABC Company</Typography>
                    </Stack>
                    <Typography textAlign={'center'}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur”
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Stack direction={'column'} alignItems={'center'}>
                      <Image
                        src="/images/ellipse47.png"
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography sx={{ py: 1.5 }} fontSize={'32px'} color={'#6755DF'} fontWeight={700}>Jeanne Dern</Typography>
                      <Typography sx={{ pb: 1 }} fontSize={'24px'} color={'#FFAF00'} fontWeight={500}>ABC Company</Typography>
                    </Stack>
                    <Typography textAlign={'center'}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur”
                    </Typography>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent>
                    <Stack direction={'column'} alignItems={'center'}>
                      <Image
                        src="/images/ellipse47.png"
                        alt="testimonial-user"
                        width={80}
                        height={80}
                      />
                      <Typography sx={{ py: 1.5 }} fontSize={'32px'} color={'#6755DF'} fontWeight={700}>Jeanne Dern</Typography>
                      <Typography sx={{ pb: 1 }} fontSize={'24px'} color={'#FFAF00'} fontWeight={500}>ABC Company</Typography>
                    </Stack>
                    <Typography textAlign={'center'}>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur”
                    </Typography>
                  </CardContent>
                </Card>
              </Slider>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ my: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction={'column'} sx={{ backgroundColor: '#F0F0F0' }}>
                <Image
                  src="/images/rectangle43.png"
                  alt="testimonial"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                />
                <Stack direction={'column'} sx={{ padding: 3 }}>
                  <IoDocumentTextOutline size={25} color='#6755DF' />
                  <Typography color={'#6755DF'} sx={{ py: 2 }} fontSize={'20px'}>
                    A Complete Guide to UiPath—made in collaboration with ERP Today
                  </Typography>
                  <Typography>
                    Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...
                  </Typography>
                </Stack>
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