import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    //maxWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2vh",

    //margin: " 0 auto 2rem auto",
  },
  btnSecondary: {
    padding: "0.75rem",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
    },
  },
  media: {
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  desc: {
    fontSize: 18,
  },
}));

const CardFeature = (props) => {
  const classes = useStyles();
  return (
    <Card
      className={classes.root}
      style={{ maxWidth: props.maxWidth, margin: props.margin }}
    >
      <CardMedia
        className={classes.media}
        image={props.img}
        title="Online learning"
      />
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.title}
        </Typography>

        <Typography className={classes.desc} variant="body2" component="p">
          {props.desc}
        </Typography>
      </CardContent>
      {props.btn ? (
        <CardActions>
          <Button
            className={classes.btnSecondary}
            variant="contained"
            color="secondary"
            size="medium"
            href={props.href}
          >
            Learn More
          </Button>
        </CardActions>
      ) : (
        ""
      )}
    </Card>
  );
};
export default CardFeature;
