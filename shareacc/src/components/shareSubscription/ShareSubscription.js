
import "../../res/css/shareSubscription.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import React from "react"
import {goto, removeLastSlash} from "../../utils/utils";
import allServices from "../../res/allServices";

const ShareSubscription = () => {
    const [radioButtons] = useState(allServices);

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
                                    <li>
                                        <div
                                            data-service="Netflix"
                                            className="bloc-whitee etape-choix"
                                        >
                                            <div className="select-valid"></div>{" "}
                                            <img

                                                src={product.imgSrc}
                                                alt="logo Netflix"
                                                title="Netflix"
                                                onClick={()=>goto(removeLastSlash(window.location.pathname)+`/${product.id}/plans`)}
                                            />
                                        </div>
                                    </li>
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
