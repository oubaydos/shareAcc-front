import React, { useState, useEffect } from "react";
import fetchOffers from "../../api/offerApi";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import OfferCard from "./OfferCard";

const OfferList = () => {
  const { provider } = useParams();

  const [offers, setOffers] = useState([]);

  const pageNumber = 1;

  useEffect(() => {
    fetchOffers(pageNumber, provider, setOffers);
  }, []);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      {offers.map((offer) => (
        <Grid item>
          <OfferCard />
        </Grid>
        )
      )}
    </Grid>
  );
};

export default OfferList;
