import React from "react";
import Mission from "../Assets/backgrounds/mission.png";

import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

const AboutStyle = makeStyles((theme) => ({
  missionStatement: {
    marginTop: "2vh",
    marginBottom: "2vh",
    display: "flex",

    justifyContent: "center",
    alignItems: "center",
    height: "auto",
  },
}));

const About = () => {
  const classes = AboutStyle();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Grid container className={classes.missionStatement}>
        <Grid
          item
          xs={12}
          md={6}
          lg={4}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "auto", height: "40vh" }}
            src={Mission}
            alt="mission statement"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          style={{ marginLeft: "2vw", marginRight: "2vw" }}
        >
          <Typography variant="inherit" component="h1" gutterBottom>
            Our mission
          </Typography>
          <Typography variant="h6" component="p">
            Our Mission As a profitable company in the market of shoe care
            products, providing the goods and services that best suit the needs
            of sector, market and customer diversity being one of the
            competitive companies in the markets we are in, to ensure that the
            Burhanoğulları Family, employees, customers, suppliers, partners and
            consumers are happy and proud of it. Our Vision Protecting the
            environment, our main goal is to become a leading company that
            provides solutions with reliable and innovative shoe care products
            that will increase the quality of consumer life.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
