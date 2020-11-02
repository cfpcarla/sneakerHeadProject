import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";

import CardFeature from "../side-components/card-features";

const serviceStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  btnFeature: {
    padding: "1.5rem",
    margin: "1rem",

    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      background: "black",
    },
  },
  cardFeatureProject: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Ranking = () => {
  const classes = serviceStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className={classes.root}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              align="center"
              variant="h3"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              I am Proficient...
            </Typography>
            <Typography align="center" variant="h6">
              in React, Redux, Rest API, NodeJS, Express, Git, Ruby on Rails,
              Javascript, Clojure, Storybook, Jest, HTML5, CSS and Python.
              <br></br>I always look forward to finding ways to integrate new
              tools and languages into my projects. You can take a look at my
              Github repositories.
            </Typography>
          </Grid>
        </Box>

        <Grid>
          <Button
            className={classes.btnFeature}
            color="secondary"
            variant="contained"
            href="https://github.com/cfpcarla"
            target="_blank"
          >
            See all features
          </Button>
        </Grid>

        <Grid
          id="card-feature-projects"
          item
          xs={12}
          style={{ marginBottom: "2vh" }}
        >
          <Grid item xs={12} className={classes.cardFeatureProject}>
            <CardFeature
              title="Booklist"
              desc="I developed this project as a platform in which you can search for books and save them to read later.
              Building a React application with a NodeJS and API back-end. ​Also use Trello to manage and organize better the tasks and VS code to develop the app."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#edu-section"
            />
            <CardFeature
              title="Task-Scheduling"
              desc="I developed this Project and the purpose is a Task Scheduling App for Dispatcher/ Driver.
              Use React with MaterialUI, also use Trello to manage and organize better the tasks and VS code to develop the app."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="​https://task-scheduling-project-3xlw5vfky.vercel.app/"
              target="_blank"
            />
            <CardFeature
              title="Glaukopis Wisdom"
              desc=" I developed this Project and the purpose is a library of learning materials, job postings, and dedicated networking communities - All within a single sources! We use React with Material UI, also use Trello to manage and organize better the tasks and VS code to develop the website."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="https://glaukopis-wisdom.vercel.app/"
              target="_blank"
            />
            <CardFeature
              title="CommitED"
              desc="This app closes the gap by providing a platform to host a network of Service Providers and volunteers who want to give back or fulfill a mandatory commitment.
              I used NodeJS
              Express
              BodyParser
              Node-fetch
              Heroku deployment
              Google maps API
              React with materialUI
              Bcrypt
              Nodemailer
              PostgreSQL
              Cors
              Axios, also use Trello to manage and organize better the tasks and VS code to develop the app."
              btn={true}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Ranking;
