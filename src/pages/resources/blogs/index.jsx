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
import RSelect from "react-select";
import AIRAMonoLinesLeft from '@/components/AIRAMonoLinesLeft/AIRAMonoLinesLeftcomponents';
import Colors from '@/common/Colorscomponents';
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import styles from '../../../styles/Home.module.css';
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

const BLOGS = [
  {
    id: 1,
    image: "blogs1.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 2,
    image: "blogs2.png",
    title: "Critical Success Factors For Intelligent Automation Transformation",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 3,
    image: "blogs3.png",
    title: "How to Create a Successful RPA Project Funnel?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "RPA",
  },
  {
    id: 4,
    image: "blogs4.png",
    title: "Artificial Intelligence In 2022: What Will Be The Next Big Thing?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Artificial Intelligance",
  },
  {
    id: 5,
    image: "blogs1.png",
    title:
      "Automation journey: Process Mining is a key to continuous value realization",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 6,
    image: "blogs2.png",
    title: "Where Should Intelligent Automation Begin- With Data Or Processes?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 7,
    image: "blogs3.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 8,
    image: "blogs4.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 9,
    image: "blogs2.png",
    title: "Critical Success Factors For Intelligent Automation Transformation",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
  {
    id: 10,
    image: "blogs3.png",
    title: "How to Create a Successful RPA Project Funnel?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "RPA",
  },
  {
    id: 11,
    image: "blogs4.png",
    title: "Artificial Intelligence In 2022: What Will Be The Next Big Thing?",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Artificial Intelligance",
  },
  {
    id: 12,
    image: "blogs4.png",
    title:
      "A Quick Guide To Realizing The Full Potential Of Business Intelligence And Analytics",
    date: "June 8,2022",
    duration: "5 min",
    tag: "Automation",
  },
];

const BlogCard = (props) => {
  const { image, title, date, duration, tag } = props;
  return (
    <Card
      raised
      sx={{
        backgroundImage: `url(${IMGBASEURL}/${image})`,
        cursor: "pointer",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        backgroundSize: "400px 400px",
        height: "400px",
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          height: "400px",
        }}
      >
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            p: 2,
            color: "#fff",
          }}
          alignSelf="flex-end"
        >
          <Typography variant="body1" sx={{ fontWeight: 600, color: "#fff" }}>
            {title}
          </Typography>
          <Divider sx={{ backgroundColor: "#fff", my: 1 }} />

          <Typography variant="body2" sx={{ color: "#fff" }}>
            {date}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 1 }}
          >
            <Chip label={tag} sx={{ backgroundColor: "#fff" }} />
            <Stack direction="row" gap={2}>
              <Typography variant="subtitle2" sx={{ color: "#fff" }}>
                {duration}
              </Typography>
              <Image
                src={`${IMGBASEURL}/time.svg`}
                alt="timesvg"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
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
                  Blogs
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.6,
                    color: Colors.eggplant,
                  }}
                >
                  Explore the latest topics and news about RPA, AI/ML and Automation
                </Typography>
              </Box>
            </Stack>
          </Container>
        </Grid>
        <Grid item xs={12} md={5}>
          <div>
            <Image
              src={`${IMGBASEURL}/blog_header.png`}
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
              <InputField type="text" className={styles.formControl} placeholder="Search" />
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
            {BLOGS.map((blogItem, blogIdx) => {
              return (
                <Grid item xs={12} md={4} key={blogItem.id}>
                  <BlogCard {...blogItem} />
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