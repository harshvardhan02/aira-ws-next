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
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
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


const IMGBASEURL = "/images/brochures";

const BROCHURES_DATA = [
  {
    id: 1,
    image: "brochure.png",
    title: "A Complete Guide to UiPath—made in collaboration with ERP Today",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 2,
    image: "brochure.png",
    title: "Critical Success Factors For Intelligent Automation Transformation",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 3,
    image: "brochure.png",
    title: "How to Create a Successful RPA Project Funnel?",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 4,
    image: "brochure.png",
    title: "Artificial Intelligence In 2022: What Will Be The Next Big Thing?",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 5,
    image: "brochure.png",
    title:
      "Automation journey: Process Mining is a key to continuous value realization",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 6,
    image: "brochure.png",
    title: "Where Should Intelligent Automation Begin- With Data Or Processes?",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 7,
    image: "brochure.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 8,
    image: "brochure.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 9,
    image: "brochure.png",
    title: "Critical Success Factors For Intelligent Automation Transformation",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 10,
    image: "brochure.png",
    title: "How to Create a Successful RPA Project Funnel?",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 11,
    image: "brochure.png",
    title: "Artificial Intelligence In 2022: What Will Be The Next Big Thing?",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
  {
    id: 12,
    image: "brochure.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    desc: "Automation can remove the manual, tedious tasks that slow us down, unlocking greater innovative potential. Check out “A Complete Guide to UiPath” to see how our products are enabli...",
  },
];

const BrochuresCard = (props) => {
  const { image, title, desc } = props;
  return (
    <Card raised>
      <CardMedia
        sx={{ height: 140 }}
        image={`${IMGBASEURL}/${image}`}
        title="green iguana"
      />
      <CardContent sx={{ maxHeight: "300px" }}>
        <Typography
          gutterBottom
          variant="body1"
          component="div"
          sx={{ color: Colors.airaPrimary }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          textOverflow="ellipsis"
        >
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};

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
                    color: Colors.airaSecondary,
                  }}
                >
                  Brochures
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: Colors.eggplant,
                  }}
                >
                  Download the brochures and gain insight into how our products work.
                </Typography>
              </Box>
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

      <Container maxWidth="md">
        <Box sx={{ margin: "0 auto", my: 6 }}>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={4}>
              <InputField type="text" placeholder="Search" />
            </Grid>
            <Grid item xs={12} md={4}>
              <RSelect
                options={[
                  {
                    label: "All Categories",
                    value: "all_categories",
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <RSelect
                options={[
                  {
                    label: "All Tags",
                    value: "all_tags",
                  },
                ]}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {BROCHURES_DATA.map((blogItem, blogIdx) => {
              return (
                <Grid item xs={12} md={4} key={blogItem.id}>
                  <BrochuresCard {...blogItem} />
                </Grid>
              );
            })}
          </Grid>

          <Stack
            alignItems="center"
            justifyContent="space-between"
            direction="row"
            sx={{ my: 5 }}
          >
            <Button
              variant="text"
              color="secondary"
              sx={{ fontWeight: 600 }}
              startIcon={<KeyboardDoubleArrowLeftIcon />}
            >
              Previous
            </Button>
            <Pagination
              count={3}
              color="secondary"
              variant="text"
              hideNextButton
              hidePrevButton
            />
            <Button
              variant="text"
              color="secondary"
              sx={{ fontWeight: 600 }}
              endIcon={<KeyboardDoubleArrowRightIcon />}
            >
              Next
            </Button>
          </Stack>
        </Box>
      </Container>
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