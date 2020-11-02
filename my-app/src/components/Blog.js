import React, { useState } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
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
  generalCardFeature: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
}));

const Blog = () => {
  const classes = serviceStyle();

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="left"
        alignItems="left"
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
              My Blog
            </Typography>
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              Behind the scenes of products I’ve built, projects I’ve worked on
              and more.
            </Typography>
          </Grid>
        </Box>

        <Grid
          id="general-card-feature"
          item
          xs={12}
          style={{ marginBottom: "2vh" }}
        >
          <Grid item xs={12} className={classes.generalCardFeature}>
            <CardFeature
              title="What is TDD and its Benefits"
              desc="TDD (Test-Driven Development) has become a recurring practice among good developers. But to start talking more about TDD we need to understand what exactly TDD is and what it is for. So Let’s go."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://medium.com/@cfpcarla/what-is-tdd-and-its-benefits-81db99b06438"
              target="_blank"
            />
            <CardFeature
              title="Why learn Ruby and Rails?"
              desc="Ruby And Rails are super famous in the world of developers, many people like others not so much, so I decided to write a little about it."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://medium.com/@cfpcarla/why-learn-ruby-and-rails-3f34f2420132"
              target="_blank"
            />
            <CardFeature
              title="Pair Programming: Advantages and disadvantages of Pair Programming"
              desc="Pair programming is a practice used by teams that adopt Extreme Programming (XP)."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://medium.com/@cfpcarla/pair-programming-advantages-and-disadvantages-of-pair-programming-1748ed69305"
              target="_blank"
            />
            <CardFeature
              title="Introduction to React"
              desc="React is a JavaScript library that has tools that facilitate the construction of Interfaces on the Web."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Blog;
