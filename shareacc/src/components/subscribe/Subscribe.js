
import "../../res/css/shareSubscription.css";
import React, {useState} from "react"
import TempCagnote from "./Cagnote";
import Box from "@mui/material/Box";
import {useParams} from "react-router-dom";
import SubscribeCard from "./SubscribeCard";
import Stripe from "./Stripe"

const ShareSubscription = () => {
    let {offerId} = useParams();
    const [offer,setOffer] = useState({
        offerer:"loading",
        provider:"loading",
        subsciptionType:"loading",
        price:"loading"
    })
    // useEffect(()=>{
    //     getOffer(offerId,setOffer);
    // },[])

    return (
        <React.Fragment>
            <div className="register-steps text-center">
                <section
                    id="registration-card2"
                    className="etape-subscribe container view"
                >
                    <h1 style={{marginBottom:"30px"}}>
                        <span>Subscribe</span>
                    </h1>
                    <p className="no-name-subscribe">
                        You will be connected only when the owner has accepted your request.
                    </p>{" "}
                    {/*TODO integrate hamza's card*/}
                    <SubscribeCard offer={offer}/>
                    <Box textAlign={"center"}>
                        <TempCagnote/>
                    </Box>

                    <div className="add-abo-suggest">
                        <Stripe amount={offer.price} />
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default ShareSubscription;
