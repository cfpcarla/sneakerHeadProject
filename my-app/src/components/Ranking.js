import React from "react";
import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import peachShoe from "../Assets/backgrounds/peachShoe.png";
import blueShoe from "../Assets/backgrounds/blueShoe.png";
import greenShoe from "../Assets/backgrounds/greenShoe.png";
import redShoe from "../Assets/backgrounds/redShoe.png";
import ninjaAdidas from "../Assets/backgrounds/ninjaAdidas.png";
import shoeTerrex from "../Assets/backgrounds/shoeTerrex.png";
import CardFeature from "../side-components/card-features";

const rankingStyle = makeStyles((theme) => ({
  root: {
    paddingTop: "5vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      maxWidth: 345,
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
  cardFeature: {
    marginTop: "2rem",
    display: "flex",
    flexWrap: "wrap",
    marginBotton: "3rem",
  },
}));

const Ranking = () => {
  const classes = rankingStyle();

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="left">
        <Box className={classes.root} display="flex">
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              variant="inherit"
              component="h1"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              Here are the 10 best shoes for you
            </Typography>
            <Typography align="center" variant="h6"></Typography>
          </Grid>
        </Box>
        <Grid
          id="card-feature-projects"
          item
          xs={12}
          style={{ marginBottom: "2vh" }}
        >
          <Grid item xs={12} className={classes.cardFeature}>
            <CardFeature
              title=" 1 Nike Air Max 1 'Evergreen'"
              desc="The Nike Air Max 1 ‘Evergreen’ features OG-inspired color blocking on the groundbreaking silhouette that introduced visible Air cushioning to an unsuspecting public back in 1987. The breathable white mesh upper is fortified with grey synthetic suede overlays and a dark green mudguard. The latter hue is repeated on the signature Swoosh and classic Nike branding hits at the heel panel and woven tongue tag."
              btn={true}
              img={greenShoe}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#edu-section"
              margin-botton="3rem"
              variant="inherit"
              component="h3"
            />
            <CardFeature
              title=" 2 Nike Revolution Shoes - Royal Blue"
              desc="Your active little one can stay cool and comfy on the playground wearing the Nike Boys' Grade School Revolution 5 Kids' Shoe Blue/White/Black. These running shoes for kids feature a mesh upper that is lightweight, breathable and stretchy. A foam midsole provides ample cushioning for his landings."
              btn={true}
              img={blueShoe}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="​https://task-scheduling-project-3xlw5vfky.vercel.app/"
              target="_blank"
              style={{ marginBottom: "2vh" }}
            />
            <CardFeature
              title="3 Nike Women's React Element Sneakers - White Pink "
              desc="The Nike React Element 55 Women's Shoe borrows design lines from heritage Nike runners like the Internationalist, adds reflective graphics and then places it all on Nike React technology."
              btn={true}
              maxWidth={600}
              img={peachShoe}
              margin="0 auto 0 auto"
              href="https://glaukopis-wisdom.vercel.app/"
              target="_blank"
              style={{ marginBottom: "2vh" }}
            />
            <CardFeature
              title="4 Air Jordan 1 Retro High Black and Grey"
              desc="The Nike Air Jordan 1 Retro High 'Black Elephant' features a black leather and cement grey elephant print upper reminiscent of the iconic 2002 Supreme x Dunk Low Pro SB. Released in January 2016, the look is finished off with Varsity Red accents, a white midsole, and a black outsole."
              btn={true}
              img={redShoe}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
            <CardFeature
              title="5 NINJA NITE JOGGER SHOES"
              desc="A collaborative effort between adidas and gaming streamer, Tyler Ninja Blevins, these Nite Jogger shoes stand as a testament to the time it takes to achieve greatness. Energy-returning cushioning and a mesh and leather upper keep you comfortable as the game heats up."
              btn={true}
              img={ninjaAdidas}
              maxWidth={600}
              margin="0 auto 0 auto"
              href="#pro-section"
            />
            <CardFeature
              title="6 TERREX TWO ULTRA PARLEY TRAIL RUNNING SHOES"
              desc="TERREX TWO Ultra Parley – designed to keep you comfortable on the trail, no matter the distance. The flexible upper features Parley Ocean Plastic – up-cycled plastic waste, intercepted on remote islands, beaches, coastal communities, and shorelines, preventing it from polluting our oceans. And with full-length Boost cushioning and a Continental™ Rubber outsole for serious grip, it's time to hit the trail."
              btn={true}
              img={shoeTerrex}
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
