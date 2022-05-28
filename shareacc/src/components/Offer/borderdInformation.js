import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import "../../res/css/borderedinformation.css";

const BorderedInformation = () => {
  const styles = {
    easy: {
      position: "absolute",
      top: "-16px",
      width: "100px",
      background: "#fff",
      border: "1px solid #edf1f4",
      padding: "5px 0",
      left: "50%",
      margin: "0 0 0 -50px",
      color: "#fb3c67",
      borderRadius: "50px",
      fontSize: "20px",
    },
  };

  return (
    <Container className="bloc-facile">
      <Typography style={styles.easy}>Easy !</Typography>
      <Typography sx={{ marginTop: "20px" }}>
        <strong>Offer a subscription :</strong> <br /> I am the owner of a
        subscription and I want to share it.
      </Typography>
      <Typography sx={{ marginTop: "20px" }}>
        <strong>Subscribe :</strong> <br /> I am looking for a subscription and
        wish to subscribe to it.
      </Typography>
    </Container>
  );
};

export default BorderedInformation;
