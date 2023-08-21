import React, { useState, useRef } from 'react';
import styled from "styled-components";
import {
  Avatar,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Grid,
  Popover
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Link from 'next/link';
import CssBaseline from '@mui/material/CssBaseline';
import _ from "lodash";
import { useRouter } from 'next/router';
import { useTranslation } from "next-i18next";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import PlatformPopover from '../Popover/PlatformPopover';
import SolutionsPopover from '../Popover/SolutionsPopover';
import ResourcesPopover from '../Popover/ResourcesPopover';
import CompanyPopover from '../Popover/CompanyPopover';
import styles from './Header.module.css';
import Image from 'next/image';
import RoundedButton from '../RoundedButton/RoundedButton';
import TryAiraDialog from '../TryAiraDialog/TryAiraDialog';
import { BsPersonGear } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


const drawerWidth = 280;
const navItems = [
  { name: 'Platform', toggle: 'toggle1' },
  { name: 'Solutions', toggle: 'toggle2' },
  { name: 'Resources', toggle: 'toggle3' },
  { name: 'Company', toggle: 'toggle4' }
];

const LANGUAGE = [
  {
    id: "fr",
    title: "French",
    icon: '/flagFrance.png',
  },
  {
    id: "ar",
    title: "Arabic",
    icon: '/flagSaudi.png',
  },
  {
    id: "en",
    title: "English",
    icon: '/flagIndia.png',
  },
];

const platformPages = [
  { name: "Hyper-automation Solution", route: "/platform/has" },
  { name: "Robotic Process Automation", route: "/platform/rpa" },
  { name: "AI / ML", route: "/platform/aiml" },
  { name: "Intelligent Document Processing", route: "/platform/idp" },
  { name: "Natural Language Processing", route: "/platform/nlp" },
  { name: "Workflow", route: "/platform/workflow" },
  { name: "Orchestrator", route: "/platform/orchestrator" },
  { name: "Process Mining", route: "/platform/process_minig" },
  { name: "Advanced Analytics", route: "/platform/advancedAnalytics" },
  { name: "Predictive Analytics", route: "/platform/predictive_analytics" },
]

const solutionPages = [
  { name: "Manufacturing", route: "/solutions/manufacturing" },
  { name: "Telecom Automation", route: "/solutions/telecom" },
  { name: "Banking and Finance", route: "/solutions/banking_and_finance" },
  { name: "BPO", route: "/solutions/bpo" },
  { name: "Insurance", route: "/solutions/insurance" },
  { name: "Retail", route: "/solutions/retail" },
  { name: "Aviation", route: "/solutions/aviation" },
  { name: "Healthcare", route: "/solutions/healthcare" },
  { name: "Supply Chain", route: "/solutions/supply_chain" },
  { name: "Human Resource", route: "/solutions/human_resource" },
  { name: "Marketing Sales", route: "/solutions/marketing_and_sales" },
  { name: "Customer Service", route: "/solutions/customer_service" },
  { name: "Service Now", route: "/solutions/service_now" },
  { name: "Salesforce", route: "/solutions/salesforce" },
  { name: "SAP", route: "/solutions/sap" },
  { name: "JIRA", route: "/solutions/jira" },
  { name: "AWS", route: "/solutions/aws" },
  { name: "Oracle", route: "/solutions/oracle" },
  { name: "Hubspot", route: "/solutions/hubspot" },
]

const resourcePages = [
  { name: "Blogs", route: "/resources/blogs" },
  { name: "Success Stories", route: "/resources/success_stories" },
  { name: "White paper", route: "/resources/whitepapers" },
  { name: "Events", route: "/resources/events" },
  { name: "Brochure", route: "/resources/brochures" },
  { name: "Documentation", route: "/resources/documentation" },
  { name: "Testimonials", route: "/resources/testimonials" }
]

const companyPages = [
  { name: "About us", route: "/company/about_us" },
  { name: "Leadership Team", route: "/company/leadership_team" },
  { name: "Pricing", route: "/company/pricing" },
  { name: "Careers at AIRA", route: "/company/careers" },
  { name: "Corporate Social Responsibility", route: "/company/csr" },
  { name: "Partner", route: "/company/partner" },
  { name: "Partnership Portal Page", route: "/company/partnership_portal_page" },
]

export const navPages = [
  { lid: "platform", name: "Platform", id: "/platform" },
  { lid: "solutions", name: "Solutions", id: "/solutions" },
  { lid: "resources", name: "Resources", id: "/resources" },
  { lid: "company", name: "Company", id: "/company" },
];

const RenderPopOverView = ({ id, onLinkClick }) => {
  switch (id) {
    case "/platform":
      return <PlatformPopover onLinkClick={onLinkClick} />;
    case "/solutions":
      return <SolutionsPopover onLinkClick={onLinkClick} />;
    case "/resources":
      return <ResourcesPopover onLinkClick={onLinkClick} />;
    case "/company":
      return <CompanyPopover onLinkClick={onLinkClick} />;
    default:
      return (
        <div>
          {/* <h4>You found a bug</h4> */}
        </div>
      );
  }
};

const getDesiredWidth = (id) => {
  if (id === "/platform") {
    return '700px'
  } else if (id === "/solutions") {
    return '750px'
  } else if (id === "/resources") {
    return '250px'
  } else if (id === "/company") {
    return '250px';
  } else {
    return '250px'
  }
}

const hoverSx = {
  "&:hover": {
    backgroundColor: '#f5f5f5',
    cursor: 'pointer',
  },
  padding: '40px 30px'
}

const Header = () => {
  const location = useRouter();
  const { locale, locales, push } = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openTryAIRADialog, setOpenTryAIRADialog] = useState(false);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState(null);
  const [userAnchorEl, setUserAnchorEl] = React.useState(null);
  const [popName, setPopName] = useState(null)
  const [megaMenu, setMegaMenu] = useState(null)
  const openLanguageMenu = Boolean(languageAnchorEl);
  const openUserMenu = Boolean(userAnchorEl);
  const { t } = useTranslation('common');
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openList, setOpen] = React.useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false
  });

  // const handleClickOpenList = () => {
  //   setOpen((prevState) => !prevState);
  // };

  const handleToggle = (toggleName) => {
    setOpen((prevToggles) => ({
      ...prevToggles,
      [toggleName]: !prevToggles[toggleName],
    }));
  };


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLanguageClick = (event) => {
    setLanguageAnchorEl(event.currentTarget);
  };

  const handleSupportClick = (e) => {
    setUserAnchorEl(e.currentTarget)
  }

  const handleLanguageClose = () => {
    setLanguageAnchorEl(null);
  };

  const handleSupportClose = () => {
    setUserAnchorEl(null)
  }

  const handleLanguageChange = (e, id) => {
    // console.log("🚀 ~ file: Header.jsx:141 ~ handleLanguageChange ~ id:", id)
    // document.dir = _.isEqual(id, "ar") ? "rtl" : "ltr";
    // i18n.changeLanguage(id);
    // console.log(i18n.changeLanguage(id))
    push('/', undefined, { locale: id })
    handleLanguageClose();
  };

  const handleNavigateSupport = () => {
    handleSupportClose();
  }

  const handleClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setPopName(id)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToParentRoute = (id) => {
    console.log("🚀 ~ file: Header.jsx:143 ~ goToParentRoute ~ id:", id)
    location.push(id)
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [toHideMegaMenu] = useState(["/aboutus", "/contactus"]);

  const drawer = (
    <Box sx={{ textAlign: 'left' }}>
      <Link href="/">
        <Box sx={{ px: 1.5 }}>
          <Image
            onClick={handleDrawerToggle}
            width={120}
            height={60}
            src='/airalogo.svg'
            alt="AIRA Logo"
            priority
          />
        </Box>
      </Link>
      <Divider />
      <List>
        <ListItemButton onClick={() => handleToggle('toggle1')}>
          <ListItemText primary="Platform" />
          {openList.toggle1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.toggle1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {platformPages.map((item, idx) => (
              <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, borderBottom: '1px solid #CDCDCD' }} key={idx}>
                <Link style={{ textDecoration: "none", color: '#000' }} href={item.route}>
                  <Typography>{item.name}</Typography>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <List>
        <ListItemButton onClick={() => handleToggle('toggle2')}>
          <ListItemText primary="Solutions" />
          {openList.toggle2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.toggle2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {solutionPages.map((item, idx) => (
              <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, borderBottom: '1px solid #CDCDCD' }} key={idx}>
                <Link style={{ textDecoration: "none", color: '#000' }} href={item.route}>
                  <Typography>{item.name}</Typography>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <List>
        <ListItemButton onClick={() => handleToggle('toggle3')}>
          <ListItemText primary="Resources" />
          {openList.toggle3 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.toggle3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {resourcePages.map((item, idx) => (
              <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, borderBottom: '1px solid #CDCDCD' }} key={idx}>
                <Link style={{ textDecoration: "none", color: '#000' }} href={item.route}>
                  <Typography>{item.name}</Typography>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
      <List>
        <ListItemButton onClick={() => handleToggle('toggle4')}>
          <ListItemText primary="Company" />
          {openList.toggle4 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openList.toggle4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {companyPages.map((item, idx) => (
              <ListItemButton onClick={handleDrawerToggle} sx={{ pl: 4, borderBottom: '1px solid #CDCDCD' }} key={idx}>
                <Link style={{ textDecoration: "none", color: '#000' }} href={item.route}>
                  <Typography>{item.name}</Typography>
                </Link>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  const container = undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        component="nav"
        sx={{
          backgroundColor: "#fff",
          pt: { sm: 0 },
          px: 3,
        }}
      >
        {/* <Container maxWidth="lg"> */}
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              color="default"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/">
              <Image width={120} height={60} src='/airalogo.svg' alt="AIRA Logo" />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pl: 4 }}>
            {navPages.map((page, idx) => (
              <div key={idx} className={styles.dropdown} >
                <Button
                  className={styles.dropbtn}
                  aria-describedby={id}
                  onMouseEnter={(event) => handleClick(event, page.id)}
                  onClick={() => goToParentRoute(page.id)}
                  key={idx}
                  sx={{
                    my: 2,
                    color: 'black',
                    display: 'block',
                    fontWeight: 600,
                    borderBottom: location.asPath === page.id ? '3px solid #6755DF' : ""
                  }}
                >
                  {t(page.name)}
                </Button>
                <Box sx={{ minWidth: getDesiredWidth(page.id) }} className={styles.dropdownContent} >
                  <RenderPopOverView id={popName} />
                </Box>
              </div>
            ))}
          </Box>

          <Stack direction="row" sx={{ gap: { xs: 0, md: 4 } }}>
            <Stack direction="row" justifyContent="flex-end">
              <IconButton sx={{ m: 0, display: { xs: "none", md: 'block' } }} onClick={() => { }} size="small">
                <Image height={50} width={50} src="/search.svg" alt="Search" />
              </IconButton>
              <div>
                <IconButton sx={{ m: 0, display: { xs: "none", md: 'block' } }} onClick={handleSupportClick} size="small">
                  <Image height={50} width={50} src="/support.svg" alt="Support" />
                </IconButton>
                <Popover
                  anchorEl={userAnchorEl}
                  open={openUserMenu}
                  onClose={handleSupportClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  // sx={{ maxHeight: 400 }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Stack sx={{ width: 660 }} justifyContent="center">
                    <Grid container wrap='nowrap' columnSpacing={2}>
                      <Grid zeroMinWidth item xs={6}>
                        <Box sx={hoverSx} onClick={() => handleNavigateSupport()}>
                          <Stack direction="column" justifyContent="center">
                            <MdSupportAgent color='#6755DF' size={30} />
                            <Typography sx={{ mt: 1.5 }} variant='h6' fontSize={14} fontWeight="bold">
                              Sales Support
                            </Typography>
                            <Typography variant='subtitle2' fontSize={12}>
                              Have a question? Our team is here to help guide you on your automation journey.
                            </Typography>
                          </Stack>
                        </Box>
                      </Grid>
                      <Grid zeroMinWidth item xs={6}>
                        <Box sx={hoverSx} onClick={() => handleNavigateSupport()}>
                          <Stack direction="column" justifyContent="center">
                            <BsPersonGear color='#6755DF' size={30} />
                            <Typography sx={{ mt: 1.5 }} variant='h6' fontSize={14} fontWeight="bold">
                              Technical Support
                            </Typography>
                            <Typography variant='subtitle2' fontSize={12}>
                              Explore support plans designed to match your business requirements.
                            </Typography>
                          </Stack>
                        </Box>
                      </Grid>
                    </Grid>
                  </Stack>
                </Popover>
              </div>
              <IconButton sx={{ m: 0 }} onClick={() => { }} size="small">
                <Image height={50} width={50} src="/person.svg" alt="Person" />
              </IconButton>
              <div>
                <IconButton
                  sx={{ m: 0 }}
                  onClick={handleLanguageClick}
                  size="small"
                >
                  <Image height={50} width={50} src="/world.svg" alt="World" />
                </IconButton>
                <Menu
                  anchorEl={languageAnchorEl}
                  open={openLanguageMenu}
                  onClose={handleLanguageClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {LANGUAGE.map((langItem, langIdx) => {
                    const { title, icon, id } = langItem;
                    return (
                      <MenuItem
                        dense
                        onClick={(e) => {
                          handleLanguageChange(e, id);
                        }}
                        key={langItem.id}
                        sx={{ p: 0 }}
                      >
                        <CardHeader
                          avatar={
                            <Avatar
                              src={icon}
                              alt={title}
                              sx={{ width: 25, height: 25 }}
                            />
                          }
                          title={title}
                        />
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            </Stack>
            <div style={{ alignSelf: "center" }}>
              <RoundedButton
                sx={{ m: 0, display: { xs: "none", md: 'block' } }}
                label="Try AIRA Free"
                onClick={() => {
                  setOpenTryAIRADialog(true);
                }}
              />
            </div>
          </Stack>
        </Toolbar>
        <TryAiraDialog
          open={openTryAIRADialog}
          handleClose={() => {
            setOpenTryAIRADialog(false);
          }}
        />
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}

// export const getServerSideProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ['common'])),
//   },
// })

export default Header