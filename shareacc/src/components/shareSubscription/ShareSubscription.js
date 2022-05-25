
import "../../res/css/shareSubscription.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import React from "react"
import {importAll} from "../../utils/utils";
const images = importAll(require.context("../../res/images/", false, /\.(png|jpe?g|svg)$/));

const ShareSubscription = () => {
    const [radioButtons] = useState({

        products: [
            {
                id: 1,
                categoryName: "SVOD",
                imgSrc: images["netflix.png"],
            },
            {
                id: 2,
                categoryName: "SVOD",
                imgSrc: images["disneyplus.png"],
            },
            {
                id: 3,
                categoryName: "SVOD",
                imgSrc: images["youtubepremium.png"],
            },
            {
                id: 4,
                categoryName: "SVOD",
                imgSrc: images["appletv.png"],
            },
            {
                id: 5,
                categoryName: "SVOD",
                imgSrc: images["starzplay.png"],
            },
            {
                id: 6,
                categoryName: "SVOD",
                imgSrc: images["mubi.png"],
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
