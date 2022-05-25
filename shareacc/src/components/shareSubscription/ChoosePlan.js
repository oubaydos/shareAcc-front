
import "../../res/css/shareSubscription.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import React from "react"
import PlanCard from "./planCard"
const ShareSubscription = () => {
    const [radioButtons] = useState({

        products: [
            {
                id: 1,
                type: "Standard",
                description: "Watch Netflix on 2 screens at once. HD available",
                price: 13.49,
                maxUsers: 2,
            },
            {
                id: 2,
                type: "Premium",
                description: "Watch Netflix on 4 screens at once. HD and Ultra HD available",
                price: 17.99,
                maxUsers: 4,
            }
        ],
    });

    return (
        <React.Fragment>
            <div className="register-steps text-center">
                <section
                    id="registration-card2"
                    className="etape-subscribe container view"
                >
                    <h1 style={{marginBottom:"30px"}}>
                        <span>Select the subscription to share</span>
                    </h1>

                    <div>
                        <div className="bloc-offers-subscribe">
                            <ul className="list-offers-subscribe">
                                {radioButtons.products.map((product) => (
                                    <ul>
                                        <div>
                                            <div className="select-valid"></div>{" "}
                                            <PlanCard plan={product}/>

                                        </div>
                                    </ul>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="add-abo-suggest">
                        <p className="no-name-subscribe">
                            Your subscription is not on the list?
                        </p>{" "}
                        <Link to="/contact">
                            <div
                                data-modal="suggest-service"
                                className="btn-greenn inline-block btn-suggest modal-trigger"
                            >
                                <div style={{color:"#000000"}}>Contact Us</div>
                            </div>
                        </Link>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
};

export default ShareSubscription;
