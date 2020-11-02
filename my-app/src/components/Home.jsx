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
  button: {
    marginTop: "-11rem",
    fontSize: "1.5rem",
    marginLeft: "-580px",
    marginBottom: "45px",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: 1000,
    display: "block",
    Width: 300,
    overflow: "hidden",
    width: "100%",
    backgroundColor: "#455954",
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
        <Grid item xs={12}>
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
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#F2F3F4",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            style={{
              marginTop: "3rem",
              color: "black",
              alignItems: "center",
              background: "#F2F3F4",
            }}
          >
            We really love shoes!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            style={{
              marginTop: "3rem",
              marginBottom: "3rem",
              color: "black",
              alignItems: "center",
              background: "#F2F3F4",
            }}
          >
            Sneakerhead wears, review and rates all the latest and greatest
            kicks on the market.
          </Typography>
          <Button
            style={{
              marginTop: "1rem",
              marginBottom: "6rem",
              fontSize: "1.5rem",
            }}
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
      </div>
    </>
  );
};

export default Home;
