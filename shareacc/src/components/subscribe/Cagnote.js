import React, { useState } from "react";
import Cross from "./Cross";
import "../../res/css/cagnote.css";
const Cagnote = () => {
    const [count] = useState(10);
    return (
        <React.Fragment>
            <Cross />
            <div
                tabIndex="-1"
                role="dialog"
                className="ui-dialog ui-corner-all ui-widget ui-widget-content ui-front dialog-buy-giftcard"
                aria-describedby="dialog-buy-giftcard"
                aria-labelledby="ui-id-4"
                style={{
                    height: "auto",
                    width: "800px",
                    top: "60%",
                    zIndex: 101,
                    left:"20%",
                    margin:"0 auto 0 auto",
                    border:"none"
                }}

            >
                <div
                    id="dialog-buy-giftcard"
                    className="giftcard-modal ui-dialog-content rui-widget-content"
                    style={{
                        display: "block",
                        width: "auto",
                        minHeight: "130px",
                        maxHeight: "none",
                        height: "auto",
                    }}
                >

                    <div className="amount-giftcard">
                        <h3>Amount to be credited :</h3>
                        <div className="range-chiffre">
                            <div className="line-suscribe flex">

                                <div className="tarif-range">
                                    <input
                                        type="text"
                                        maxLength="4"
                                        value={count}
                                        style={{backgroundColor:"#006D77"}}
                                        readOnly=""
                                        name="amount"
                                        required="required"
                                        className="input-range"
                                    />
                                    <div className="signe-euro">€</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    );
};

export default Cagnote;
