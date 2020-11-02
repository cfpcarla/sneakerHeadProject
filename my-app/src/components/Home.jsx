import React from "react";
import CardFeature from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/side-components/card-features.js";
import peachShoe from "/Users/carlamedeiros/src/sneakerHeadProject/my-app/src/Assets/backgrounds/peachShoe.png";
import {
  makeStyles,
  Grid,
  Box,
  Button,
  Typography,
  Link,
} from "@material-ui/core";

import { ABOUT, BLOG } from "../controller/nav-controller";

const homeStyles = makeStyles((theme) => ({
  root: { flexGrow: 1 },
  proposition: {
    background: "#f6eeea",
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
    backgroundColor: "#fffafa",
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
    background: "#f6eeea",
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
}));
const Home = (props) => {
  const classes = homeStyles();
  const setParentDisplay = (value) => {
    props.setDisplay(value);
  };

  return (
    <>
      <div>
        {/* VALUE PROPOSITION */}
        <Grid item xs={12} className={classes.proposition}>
          <img
            className={classes.communityImg}
            src={peachShoe}
            alt="united covid 19 unsplash"
          ></img>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Grid>
        </Grid>
        <Typography variant="h1" align="center">
          Perfect your professional portfolio
        </Typography>
        <Typography
          variant="h4"
          align="center"
          style={{ marginTop: "1rem", color: "#d4d4d4" }}
        >
          Your curated library of learning materials, job postings, and
          dedicated networking communities - All within a single sources!
        </Typography>
        <Button
          style={{ marginTop: "2rem", fontSize: "1.5rem" }}
          variant="contained"
        >
          Start now
        </Button>

        {/* LIST FEATURE PROVIDED */}
        <Grid item xs={12}>
          <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
            Provided Features
          </Typography>
          <Grid item xs={12} className={classes.featureList}>
            <CardFeature
              title="Educational Programs"
              desc="Our online course selection has been vetted and verified to provide you with the industry’s most renowned learning materials. Our up to date programs are actively implemented and will help to give you a leading edge in your field of interest."
              img={peachShoe}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Job Opportunities"
              desc="Our in house bulletin boards are made to be the first stop on your employment pursuits. We offer links to job search engines, companies hiring around you, and business postings for both contract and internship availabilities."
              // img={Forum}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Community Hub"
              desc="Our community hub is a gateway for teachers, students, businesses, and individuals - All working, learning, and improving as one."
              // img={Workshop}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
            <CardFeature
              title="Hiring Workshop"
              desc="Job in mind? Strengthen your skills and ace your next job interview with ease!"
              // img={JobSearch}
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
            />
          </Grid>
        </Grid>

        {/* FLEX ON THE SEARCH ENGINEE */}
        <Grid item xs={12} md={12} className={classes.resourcesListContainer}>
          <Box height="80%" className={classes.resourcesPaper}>
            <Typography
              gutterBottom
              variant="h3"
              style={{ fontWeight: "normal" }}
              align="center"
            >
              We search around the internet to find the best resources for you
              to improve upon your next career path.
            </Typography>
            <Box className={classes.resourcesList}></Box>
            <Typography variant="h4">+ dozen more resources to come</Typography>
            <Typography
              align="center"
              variant="h3"
              style={{ fontWeight: "bold" }}
            >
              so that you don't
            </Typography>

            <Button
              style={{ marginTop: "2rem", fontSize: "1.5rem" }}
              variant="contained"
              color="primary"
            >
              Start now
            </Button>
          </Box>
        </Grid>

        {/* Community Hub explain */}
        <Box xs={12} display="flex" flexWrap="wrap">
          <Grid
            item
            xs={12}
            lg={6}
            md={6}
            style={{ margin: "2rem auto 2rem auto", paddingLeft: "1rem" }}
          >
            <Typography variant="h3">
              A fully integrated suite of learning materials and job resources
              from multiple platforms combind
            </Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              We bring together everything that’s require to land your next job.
              From educational resources to improve your skills, to job search
              engine, or a professional workshop where you can improve upon your
              interview and resume skills.
            </Typography>
            <Typography variant="h4" style={{ margin: "2rem 0 2rem 0" }}>
              We also provide a <Link color="secondary">community hub</Link> for
              users to join and share their thought to one of another.
            </Typography>
            <Button variant="contained" color="primary">
              Explore now
            </Button>
          </Grid>
          <Grid item xs={12} lg={5} md={5}>
            {/* <img
              className={classes.communityImg}
              src={CommunityHub}
              alt="united covid 19 unsplash"
            ></img> */}
          </Grid>
        </Box>

        <Grid container className={classes.nextStep}>
          <Grid
            item
            xs={12}
            md={4}
            className={classes.nextStepContent}
            style={{ margin: " 0 auto 0 auto" }}
          >
            <Typography variant="h3"> Ready to get started ?</Typography>
            <Typography variant="h4" style={{ marginTop: "2rem" }}>
              Head over to Glaukopis Wisdom and start your career search now.
              Still have question about our service and how it work ? - We
              answered a few frequently asked question for you.
            </Typography>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                className={classes.btnCont}
                variant="contained"
                color="secondary"
              >
                Start now
              </Button>
              <Button
                className={classes.btnCont}
                onClick={() => setParentDisplay(BLOG)}
                variant="contained"
                color="primary"
              >
                Explore services
              </Button>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className={classes.nextStepContent}
            style={{ margin: " 0 auto 0 auto" }}
          ></Grid>
        </Grid>
      </div>
    </>
  );
};

// return (
//   <>
//     <div>
//       {/* Image with me and my name  */}
//       <Grid item xs={12} className={classes.proposition}>
//         <Grid
//           item
//           xs={12}
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           <Box className={classes.box}>
//             <img className={classes.imgBrand} alt="logo" src={peachShoe} />
//           </Box>
//         </Grid>
//       </Grid>
//     </div>
//   </>
// );

export default Home;
