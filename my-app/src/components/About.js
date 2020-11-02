import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import {
  Box,
  Grid,
  makeStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
} from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import CodeIcon from "@material-ui/icons/Code";
import GavelIcon from "@material-ui/icons/Gavel";

// import DeveloperCard from "./side-components/developer-card";
const AboutStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "#FEFEFE",
    height: "auto",
  },
  media: {
    width: "100%",
  },
  imageGrid: {
    textAlign: "center",
  },
  content: {
    padding: "20px",
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const About = () => {
  const classes = AboutStyle();
  return (
    <Box>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography
            color="primary"
            variant="h3"
            style={{
              color: "black",
              marginLeft: "-25vw",
              textAlign: "center",
              background: "f5f3f4",
            }}
          >
            About Me
          </Typography>
        </Grid>

        <Grid item xs={12} md={8}>
          <Timeline align="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot>
                  <GavelIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    After start my career in development area
                  </Typography>
                  <Typography>
                    Previously, I consolidated my 5 years of experience in law
                    and in different types of companies, which allowed me to
                    understand the complexity and dynamics of the corporate
                    environment, develop personal skills and generate results
                    for the teams in which I participated.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    July/2019
                  </Typography>
                  <Typography>
                    July was where I started my career transition. I started an
                    online Java script course, where I started to understand
                    basic and in-depth concept of the language.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    Nov-Feb/2020
                  </Typography>
                  <Typography>
                    I Finished Bootcamp in web development at Lighthouse Labs
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    March
                  </Typography>
                  <Typography>
                    I developed a project called booklist where you can search
                    for books and save them for later reading. It was a great
                    way to start putting into practice what I had learned at
                    Lighthouse Labs.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector className={classes.secondaryTail} />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    April
                  </Typography>
                  <Typography>
                    After that I did a voluntary work that was to develop a
                    website for a hackaton. It was a great experience. In the
                    same month I started taking a basic python course. In the
                    bootcamp I didn’t learn python, so as I’m always looking for
                    new knowledge so I decided to do it and it was really cool.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    May/July
                  </Typography>
                  <Typography>
                    I Volunteering for Bloom Venture where I had to develop
                    projects for the company's partners in the Clojure Script
                    programming language. This volunteering gave me the
                    experience to understand how to run a company's processes in
                    the technology area and also to work as a pair programmer.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    August
                  </Typography>
                  <Typography>
                    I developed another project to continue studying react and
                    javascript. Then I participated in a blended learning
                    program, where I had the opportunity to combine valuable
                    work experience and helped me to develop personal skills,
                    such as communication, collaboration and problem solving.
                    And also in the web development part. My project is
                    available in the part of projects with the name Glaukopis
                    wisdon.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary">
                  <CodeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    Setember
                  </Typography>
                  <Typography>
                    I continued studying by attending conferences to get
                    inspired, I participated in a mentoring group to continue
                    growing in the development career that I love and I started
                    developed this portfolio.
                  </Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary">
                  <CodeIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Paper elevation={3} className={classes.paper}>
                  <Typography
                    variant="h6"
                    component="h1"
                    style={{ fontWeight: "bold" }}
                  >
                    October
                  </Typography>
                  <Typography></Typography>
                </Paper>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>

        <Grid item xs={12} md={4} className={classes.imageGrid}>
          {/* <img src={female_developer} className={classes.media} /> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
