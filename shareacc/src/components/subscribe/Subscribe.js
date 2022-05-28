
import "../../res/css/shareSubscription.css";
import React from "react"
import TempCagnote from "./Cagnote";
import Box from "@mui/material/Box";

const ShareSubscription = () => {
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
                    <Box textAlign={"center"}>
                        <TempCagnote/>
                    </Box>

                    <div className="add-abo-suggest">
                        {/*<p className="no-name-subscribe">*/}
                        {/*    You will be connected only when the owner has accepted your request.*/}
                        {/*</p>{" "}*/}

                            <div
                                data-modal="suggest-service"
                                className="btn-greenn inline-block btn-suggest modal-trigger"
                            >
                                <div onClick={()=>{alert("clicked")}} style={{color:"#000000"}}>Purchase Now</div>
                            </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default ShareSubscription;
