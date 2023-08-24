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
  Container,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Checkbox
} from "@mui/material";
import Image from 'next/image';
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMapPin } from "react-icons/hi2";
import { styled } from '@mui/material/styles';
import { Country } from 'country-state-city';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: Colors.airaPrimary,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: Colors.airaPrimary,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#B8B8B8',
    },
    '&:hover fieldset': {
      borderColor: '#000000',
    },
    '&.Mui-focused fieldset': {
      borderColor: Colors.airaPrimary,
    },
  },
});

const CssSelectField = styled(Select)({
  '& .MuiInputBase-input': {
    color: Colors.airaPrimary,
    borderColor: '#B8B8B8',
  },
  '&:focus': {
    borderRadius: 4,
    borderColor: Colors.airaPrimary,
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
  },
})

const AIRAButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#FFAF00',
  color: '#ffffff',
  borderColor: '#FFAF00',
  '&:hover': {
    backgroundColor: '#FFAF00',
    borderColor: '#FFAF00',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFAF00',
    borderColor: '#FFAF00',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(103, 85, 223, 1)',
  },
});


const IMGBASEURL = "/images/brochures";

const Index = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
              <Stack direction={'column'} sx={{ pt: 2 }}>
                <Stack direction={'row'} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: 2 }}>+33 1 89 16 58 28</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'flex-start'}>
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
              <Stack direction={'column'} sx={{ pt: 2 }}>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>France</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: { xs: 0, md: 2 } }}>15 Rue, Jacobi Netter,Strasbourg, France</Typography>
                </Stack>
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={'flex-start'}>
                  <Typography color={Colors.airaSecondary}>India</Typography>
                  <Typography color={Colors.airaPrimary} sx={{ pl: { xs: 0, md: 2 } }}>502 Vikram Heights, YN Rd,Indore, India</Typography>
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

      <Box sx={{ py: 8, my: 8, backgroundColor: '#F8F9FB' }}>
        <Container maxWidth="md">
          <Typography textAlign={'center'} fontSize={'32px'} fontWeight={600}>
            Have An Enquiry? <span style={{ color: '#FFAF00' }}>Please Write To Us</span>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <CssTextField fullWidth placeholder='First Name' id="custom-css-outlined-input" />
            </Grid>
            <Grid item xs={12} md={6}>
              <CssTextField fullWidth placeholder='Last Name' id="custom-css-outlined-input" />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <CssSelectField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  onChange={handleChange}
                  label="Country"
                >
                  {Country.getAllCountries().map(country => (
                    <MenuItem key={country.isoCode} value={country.name}>{country.name}</MenuItem>
                  ))}
                </CssSelectField>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <CssSelectField
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={''}
                  label="Country"
                >
                  <MenuItem value={1}>Automotive</MenuItem>
                  <MenuItem value={1}>AI / ML</MenuItem>
                  <MenuItem value={1}>Banking</MenuItem>
                </CssSelectField>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="outlined-multiline-static"
                label="Your Message"
                multiline
                rows={4}
                defaultValue=""
              />

              <Stack direction={{ xs: 'column', md: 'row' }} alignItems={'flex-start'} sx={{ mt: 2 }}>
                <Checkbox defaultChecked />
                <Typography fontSize={'16px'}>
                  I would like to receive communications about AIRA tailored to my interests and preferences, including latest news about products, services, events and promotions. For more information, please see our <span style={{ color: '#FFAF00' }}>Privacy Policy</span>
                </Typography>
              </Stack>

              <Stack direction={'row'} justifyContent={'flex-end'}>
                <AIRAButton sx={{ mt: 3 }}>
                  Submit
                </AIRAButton>
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

export default Index