import React, { useState } from "react";
import snLogoH from "../Assets/Logo/snLogoH.png";
import {
  Box,
  Button,
  Grid,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import StarsIcon from "@material-ui/icons/Stars";

import {
  HOME,
  ABOUT,
  TOP10,
  BLOG,
  CONNECT,
} from "../controller/nav-controller";

//navigation button
const HeaderItem = ({ title, actionFn }) => {
  return (
    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={actionFn}>
      <Typography variant="inherit" component="h2">
        {title}
      </Typography>
    </Button>
  );
};

const navStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 400,
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  appBar: {
    backgroundColor: "#F2F3F4",
    padding: "2vh 0 2vh 0.5vw",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "88px",
    width: "196px",
    marginLeft: "50px",
  },
  navContent: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  rightHeaderMenu: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
  headerItem: {
    position: "absolute",
  },
  box: {
    height: "40px",
  },
}));

const Navigation = (props) => {
  const classes = navStyles();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div />
      <List>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <HeaderItem title="Home" actionFn={() => setParentDisplay(HOME)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <HeaderItem
            title="About Us"
            actionFn={() => setParentDisplay(ABOUT)}
          />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <HeaderItem title="Top 10" actionFn={() => setParentDisplay(TOP10)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PostAddIcon />
          </ListItemIcon>
          <HeaderItem title="Blog" actionFn={() => setParentDisplay(BLOG)} />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <HeaderItem
            title="Connect"
            actionFn={() => setParentDisplay(CONNECT)}
          />
        </ListItem>
      </List>
    </div>
  );
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img
              className={classes.logo}
              src={snLogoH}
              alt="united covid 19 unsplash"
            ></img>
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify="space-between">
              <Grid
                className={`${classes.logo} logo-container`}
                item
                xs={12}
                sm={12}
                md={3}
              ></Grid>
              <Grid className={classes.navContent} item xs={9} sm={12} md={6}>
                <Box className={classes.rightHeaderMenu}>
                  <HeaderItem
                    title="Home"
                    actionFn={() => setParentDisplay(HOME)}
                  />
                  <HeaderItem
                    title="TOP10"
                    actionFn={() => setParentDisplay(TOP10)}
                  />
                  <HeaderItem
                    title="About"
                    actionFn={() => setParentDisplay(ABOUT)}
                  />
                  <HeaderItem
                    title="Blog"
                    actionFn={() => setParentDisplay(BLOG)}
                  />
                  <HeaderItem
                    title="Connect"
                    actionFn={() => setParentDisplay(CONNECT)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav>
          <Hidden>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
