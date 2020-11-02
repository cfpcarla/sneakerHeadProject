import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 350,
    margin: "auto",
  },
  media: {
    height: 300,
  },
}));

export default function DeveloperCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h4">
            {props.name}
          </Typography>
          <Typography variant="body1" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={props.link[0].portfolio}>
          <PersonIcon />
        </Link>
        {props.developer ? (
          <Link href={props.link[0].github}>
            <GitHubIcon />
          </Link>
        ) : (
          ""
        )}

        <Link href={props.link[0].linkedin}>
          <LinkedInIcon />
        </Link>
      </CardActions>
    </Card>
  );
}
