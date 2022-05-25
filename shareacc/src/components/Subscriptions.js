import { Typography } from "@mui/material";
import * as React from "react";
import { listUserOffers } from "../api/subsciptionApi";
import { useCookies } from "react-cookie";


const Subscriptions = () => {
  const [offers, setOffers] = React.useState([]);
  const [cookies, setCookie] = useCookies(["Authorization"+configData.COOKIE_SUFFIX]);


  React.useEffect(() => {
    listUserOffers(setOffers,cookies);
  }, []);
  return (
    <Typography variant="h1">Subscriptions ({subscriptions.length})</Typography>
  );
};

export default Subscriptions;
