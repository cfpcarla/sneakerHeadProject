import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { Button, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "5vh",
    marginBottom: "5vh",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  illustration: {
    width: "45vw",
    height: "50vh",
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      width: "95vw",
      height: "40vh",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  btnSubmit: {
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
  },
  eduheader: {
    marginTop: "5vh",
    width: "40vw",
    [theme.breakpoints.down("md")]: {
      width: "50vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
    },
    textAlign: "center",
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    submitted: false,
  });

  const classes = useStyles();

  const handleChangeName = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleChangeEmail = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handleChangeMsg = (event) => {
    setFormData({ ...formData, msg: event.target.value });
  };
  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        console.log("Email successfully sent!");
      })
      .catch((err) => console.error("Development Error :", err));
  };
  const handleSubmit = (e) => {
    confirmAlert({
      message: "Message sent - Thank you",
      childrenElement: () => <undraw_message_sent_1030 className="img" />,
      buttons: [
        {
          label: "OK",
          style: { fontSize: "2rem" },
        },
      ],
    });
    setFormData({ submitted: true, name: "", email: "", msg: "" });
    const templateId = "carla_email";
    sendFeedback(templateId, {
      message_html: formData.msg,
      from_email: formData.email,
    });
    e.preventDefault();
  };

  return (
    <Grid container className={classes.root}>
      {/* <img src={contact} /> */}

      <ValidatorForm onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.eduheader}>
          <Typography color="black" variant="h3">
            Contact me
          </Typography>
          <Typography color="black" variant="h4">
            I will be happy to answer your questions. Fill out the form and I
            will be in touch as soon as possible.
          </Typography>
        </div>

        <br />
        <TextValidator
          className={classes.input}
          variant="outlined"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChangeName}
          validators={["required"]}
          errorMessages={["Please fill your name"]}
        />
        <br />
        <TextValidator
          className={classes.input}
          variant="outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChangeEmail}
          validators={["required", "isEmail"]}
          errorMessages={["this field is required", "email is not valid"]}
        />
        <br />
        <TextValidator
          className={classes.input}
          variant="outlined"
          label="Message"
          multiline
          rows={10}
          name="msg"
          value={formData.msg}
          onChange={handleChangeMsg}
          validators={["required"]}
          errorMessages={["this field is required"]}
        />
        <br />
        <Button
          className={classes.btnSubmit}
          color="secondary"
          variant="contained"
          type="submit"
        >
          submit
        </Button>
      </ValidatorForm>
    </Grid>
  );
};
export default Contact;
