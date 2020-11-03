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
              Blog
            </Typography>
            <Typography
              align="center"
              variant="h4"
              style={{ margin: "2vh 0 2vh 0" }}
            >
              Here you can find all the information about shoes. Having fun!
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
              title="The Best Shoe Organizers to Store Your Favorite Footwear"
              desc="Luckily, there are plenty of shoe organizer options for you to choose from. Boxes, racks and over-the-closet hangers can come in handy for your ever-growing collection of footwear. But before you make your purchase, make sure you go through and evaluate the types of shoes you have."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://footwearnews.com/2020/shop/shoes/best-shoe-organizers-amazon-reviews-1203066641/"
              target="_blank"
            />
            <CardFeature
              title="Adidas celebrates a Masters tradition with the Crossknit DPR Low Am shoes?"
              desc="The Masters is filled with traditions, from the Champions Dinner to the Par 3 Contest (canceled this year) to the winner being awarded the green jacket."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://golfweek.usatoday.com/2020/11/02/masters-adidas-crossknit-dpr-low-am-shoes/"
              target="_blank"
            />
            <CardFeature
              title="Sidi MTB Gravel shoes an entry onto gravel bandwagon"
              desc="The Italian shoemaker Sidi has a new shoe aimed at the gravel market with the fairly straightforward title of Sidi MTB Gravel. Set in the middle of Sidi’s extensive range, the $239 pair features a durable upper and a carbon/nylon outsole."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://www.velonews.com/gear/gravel-gear/sidi-mtb-gravel-shoes-an-entry-onto-gravel-bandwagon/"
              target="_blank"
            />
            <CardFeature
              title="2020-2026 Orthopedic Shoes Market Detail Analysis focusing on Application, Types and Regional Outlook by New Balance, Dr. Comfort, Mephisto, Apex"
              desc="Global Orthopedic Shoes Market report focuses on global major leading industry players providing information such as company profiles, product picture and specification, capacity, production, price, cost, revenue and contact information."
              btn={true}
              maxWidth={300}
              margin="0 auto 0 auto"
              href="https://rejerusalem.com/245099/2020-2026-orthopedic-shoes-market-detail-analysis-focusing-on-application-types-and-regional-outlook-by-new-balance-dr-comfort-mephisto-apex/"
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Blog;
