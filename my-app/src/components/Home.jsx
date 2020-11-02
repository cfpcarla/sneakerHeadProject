import React from "react";
import CardFeature from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/side-components/card-features.js";
import peachShoe from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/Assets/backgrounds/peachShoe.png";
import blueShoe from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/Assets/backgrounds/blueShoe.png";
import greenShoe from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/Assets/backgrounds/greenShoe.png";
import redShoe from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/Assets/backgrounds/redShoe.png";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Box, Button, Typography, Link, Paper } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import {
  ABOUT,
  BLOG,
} from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/controller/nav-controller.js";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath: peachShoe,
  },
  {
    imgPath: blueShoe,
  },
  {
    imgPath: redShoe,
  },
  {
    imgPath: greenShoe,
  },
];

const homeStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },

  proposition: {
    background: "#F2F3F4",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "40% 50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  startButton: {
    backgroundColor: "#455954",
  },
  featureList: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
  imgBrand: {
    objectFit: "contain",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "300px",
      height: "400px",
      margin: "0 2vw 0 2vw",
    },
  },

  resourcesListContainer: {
    width: "100vw",
    height: "75vh",
    backgroundRepeat: "repeat",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto auto auto",
  },
  resourcesList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "2rem auto 0 auto",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  resourcesPaper: {
    borderRadius: "5px",
    backgroundColor: "#F2F3F4",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "60vw",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "auto",
    },
  },

  nextStep: {
    backgroundRepeat: "repeat",
    display: "flex",

    justifyContent: "center",
    color: "white",
    padding: "3rem",
  },
  nextStepContent: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "5vh",
  },
  buttonContainer: {
    marginTop: "5vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  btnCont: {
    width: "100vw",
    height: "4rem",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
  footer: {
    height: "50vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: "5rem",
    background: "#F2F3F4",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  button: {
    marginTop: "-11rem",
    fontSize: "1.5rem",
    marginLeft: "-580px",
    marginBottom: "45px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 1300,
    display: "block",
    Width: 400,
    overflow: "hidden",
    width: "100%",
  },
}));

const Home = (props) => {
  const classes = homeStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div>
        {/* INTRO */}
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#F2F3F4",
            justifyContent: "center",
          }}
        >
          {/* <Typography variant="h1" align="center">
            We really love shoes!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            style={{ marginTop: "1rem", color: "black" }}
          >
            Sneakerhead wears, review and rates all the latest and greatest
            kicks on the market.
          </Typography> */}
        </Grid>

        <Grid item xs={12} className={classes.proposition}>
          <Paper square elevation={0} className={classes.header}>
            <Typography>{tutorialSteps[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {tutorialSteps.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <img
                    className={classes.img}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
          // steps={maxSteps}
          // position="static"
          // variant="text"
          // activeStep={activeStep}
          // nextButton={
          //   <Button
          //     size="small"
          //     onClick={handleNext}
          //     disabled={activeStep === maxSteps - 1}
          //   >
          //     Next
          //     {theme.direction === "rtl" ? (
          //       <KeyboardArrowLeft />
          //     ) : (
          //       <KeyboardArrowRight />
          //     )}
          //   </Button>
          // }
          // backButton={
          //   <Button
          //     size="small"
          //     onClick={handleBack}
          //     disabled={activeStep === 0}
          //   >
          //     {theme.direction === "rtl" ? (
          //       <KeyboardArrowRight />
          //     ) : (
          //       <KeyboardArrowLeft />
          //     )}
          //     Back
          //   </Button>
          // }
          />
        </Grid>
      </div>
    </>
  );
};

export default Home;
