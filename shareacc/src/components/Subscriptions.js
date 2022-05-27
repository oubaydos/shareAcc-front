import { Typography ,Grid,Button} from "@mui/material";
import * as React from "react";
import listUserOffers from "../api/subsciptionApi";
import { useCookies } from "react-cookie";
import { Container } from "@mui/system";
import SubscriptionCard from "./subscriptionCard"

const Subscriptions = () => {
  const [offers, setOffers] = React.useState([]);

  React.useEffect(() => {
    listUserOffers(setOffers);
  }, []);
  return (
    <Container >
      <Container sx={{display:"flex"}}>
      <Typography variant="h5" fontWeight="medium" sx={{ mx: 10, my: 5 }}>
        Subscriptions ({offers.length})
      </Typography>
      <Button variant="contained" href="/offer-or-subscribe" sx={{height:40,my:"auto"}}>
        Add subscription
      </Button>
      </Container>

      <Grid
        container
        spacing={{ xs: 5, md: 7 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {offers.map((sub, index) => (
          <Grid item xs={1} sm={3} md={6} key={index} >
            <SubscriptionCard />
          </Grid>
        ))}
      </Grid>
      
    </Container>
  );
};

export default Subscriptions;
