import React from "react";
import peachShoe from "../Assets/backgrounds/peachShoe.png";
import blueShoe from "../Assets/backgrounds/blueShoe.png";
import greenShoe from "../Assets/backgrounds/greenShoe.png";
import redShoe from "../Assets/backgrounds/redShoe.png";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography, Paper } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import SwipeableViews from "react-swipeable-views";
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
    variant: "inherit",
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

const StyledButton = withStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 6,
    border: 0,
    color: "black",
    height: 48,
    padding: "0 30px",
    marginTop: "1rem",
    marginBottom: "6rem",
  },
})(Button);

const Home = (props) => {
  const classes = homeStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Grid container>
      {/* Carousel images */}
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
        <MobileStepper />
      </Grid>
      <Grid
        item
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#EFCEB7",
          justifyContent: "center",
        }}
      >
        <Typography
          className={classes.typography}
          variant="inherit"
          component="h1"
          align="center"
          style={{
            marginTop: "3rem",
            color: "black",
            alignItems: "center",
            background: "#EFCEB7",
          }}
        >
          We really love shoes
        </Typography>
        <Typography
          variant="inherit"
          component="h2"
          align="center"
          style={{
            marginTop: "3rem",
            marginBottom: "3rem",
            color: "black",
            alignItems: "center",
            background: "#EFCEB7",
          }}
        >
          Sneakerhead wears, review and rates all the latest and greatest kicks
          on the market.
        </Typography>
        <StyledButton>Learn More</StyledButton>
      </Grid>
    </Grid>
  );
};

export default Home;
