import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Pagination,
  Stack,
  Typography,
  Button,
  CardMedia,
  Container
} from "@mui/material";
import Image from 'next/image';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";


const IMGBASEURL = "/images/brochures";

const index = () => {
  return (
    <Box sx={{ backgroundColor: "##F8F9FB", pt: 9 }}>
      <Box>
        <Grid container spacing={2} >
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Container maxWidth="lg">
              <Typography variant="h4" sx={{ fontWeight: 700, py: 3 }}>
                Start a Conversation with{" "}
                <span style={{ color: Colors.airaSecondary }}>
                  Sales
                </span>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative" }}>
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
              <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '100%',
                    backgroundColor: '#6755DF',
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <BsTelephone size={16} color='#fff' />
                </div>
                <Typography
                  color={'#000'}
                  variant='h6'
                  fontWeight={'bold'}
                  sx={{ pl: 2 }}
                >
                  Contact us
                </Typography>
              </Stack>
              <Stack direction={'column'} sx={{ pt: 2, width: "210px" }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>+33 1 89 16 58 28</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography color={Colors.airaSecondary}>India</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>+33 1 89 16 58 28</Typography>
                </Stack>
              </Stack>

              <Stack direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '100%',
                    backgroundColor: '#6755DF',
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}>
                  <HiOutlineMapPin size={16} color='#fff' />
                </div>
                <Typography
                  color={'#000'}
                  variant='h6'
                  fontWeight={'bold'}
                  sx={{ pl: 2 }}
                >
                  Meet us
                </Typography>
              </Stack>
              <Stack direction={'column'} sx={{ pt: 2, width: "405px" }}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>15 Rue, Jacobi Netter,Strasbourg, France</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography color={Colors.airaSecondary}>India</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>502 Vikram Heights, YN Rd,Indore, India</Typography>
                </Stack>
              </Stack>
            </Container>
          </Grid>
          <Grid item xs={12} md={5}>
            <div>
              <Image
                src={`${IMGBASEURL}/brochure_header.png`}
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