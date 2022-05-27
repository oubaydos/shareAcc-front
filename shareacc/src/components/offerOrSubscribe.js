import BorderedInformation from "./borderdInformation";
import {Button,Typography,Container} from "@mui/material"
import {goto} from "../utils/utils"


const OfferOrSubscribe = () => {
  return (
    <Container>
      <center>
      <Typography variant="h5" fontWeight="bold" sx={{my:5}}>What do you want to do ?</Typography>
        <Container>
            <Button variant="contained" sx={{mx:2}} onClick={()=>goto("/offer")}>Offer</Button>
            <Button variant="outlined" sx={{mx:2}} onClick={()=>goto("/marketplace")}>Subscribe</Button>
        </Container>
      </center>
      <BorderedInformation />
    </Container>
  );
};

export default OfferOrSubscribe;