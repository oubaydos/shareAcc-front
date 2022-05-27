import React, { Component } from "react";
import "../res/css/searchpage.css";
import SearchIcon from "../components/svg-components/searchIcon";
import Carousel from "../components/carousel";
import ButtonLine from "../components/buttonLine";
import Curve from "../components/svg-components/curve";
import babiesImage from "./images/babies.png";
import emoji from "./images/no-offer-smile.png";

import Card from "../components/card";

class SearchPage extends Component {
  state = {
    sevices: [
      {
        id: 1,
        category: "security",
        name: "norton",
        image: "https://www.spliiit.com/img/subscription/norton.png",
        price: "0.22€",
      },
      {
        id: 2,
        category: "",
        name: "fastestVPN",
        image: "https://www.spliiit.com/img/subscription/fastestvpn.png",
        price: "0.22€",
      },
      {
        id: 3,
        category: "",
        name: "privateInternetaccess",
        image: "https://www.spliiit.com/img/subscription/pia.png",
        price: "0.22€",
      },
      {
        id: 4,
        category: "",
        name: "mcafee",
        image: "https://www.spliiit.com/img/subscription/mcafee.png",
        price: "0.22€",
      },
      {
        id: 5,
        category: "",
        name: "avast",
        image: "https://www.spliiit.com/img/subscription/avast.png",
        price: "0.22€",
      },
      {
        id: 6,
        category: "",
        name: "1password",
        image: "https://www.spliiit.com/img/subscription/1password.png",
        price: "0.22€",
      },
      {
        id: 7,
        category: "",
        name: "malwarebytes",
        image: "https://www.spliiit.com/img/subscription/malwarebytes.png",
        price: "0.22€",
      },
      {
        id: 8,
        category: "",
        name: "kaspersky",
        image: "https://www.spliiit.com/img/subscription/kapersky.png",
        price: "0.22€",
      },
      {
        id: 9,
        category: "",
        name: "protonVPN",
        image: "https://www.spliiit.com/storage/img/subscription/protonvpn.png",
        price: "0.22€",
      },
      {
        id: 10,
        category: "",
        name: "hidemyass",
        image: "https://www.spliiit.com/img/subscription/hma.png",
        price: "0.22€",
      },
    ],

    Subscriptions: [
      {
        id: 1,
        category: "security",
        name: "Spotify",
        image: "https://www.spliiit.com/img/subscription/spotify.png",
        price: "2.98€",
      },
      {
        id: 2,
        category: "security",
        name: "Deezer",
        image: "https://www.spliiit.com/img/subscription/deezer.png",
        price: "2.98€",
      },
      {
        id: 3,
        category: "security",
        name: "Prime",
        image: "https://www.spliiit.com/img/subscription/amazon.png",
        price: "2.49€",
      },
      {
        id: 4,
        category: "security",
        name: "ExpressVPN",
        image: "https://www.spliiit.com/img/subscription/expressvpn.png",
        price: "2.10€",
      },
      {
        id: 5,
        category: "security",
        name: "tv+",
        image: "https://www.spliiit.com/img/subscription/appletv.png",
        price: "1.22€",
      },
    ],
  };

  render() {
    return (
      <div style={{ backgroundColor: "#fbfcfc !important" }}>

        <div className="be-purple2">
          <div className="container">
            <div class="input-search">
              <SearchIcon />
              <input
                placeholder="Search..."
                class="service-filter"
                tabindex="0"
              />
            </div>
            <ButtonLine />
          </div>
        </div>
        <Curve />
        <div className="container">
          <div className="row">
            {this.state.Subscriptions.map((sub) => (
              <div className="col-sm-3 col-lg-3 mb-5">
                <Card subscription={sub} />
              </div>
            ))}
          </div>
        </div>
        <div className="container-fluid">
          <center>
            <img src={babiesImage} alt="animated" className="babyImage" />
          </center>
          <div className="compress">
            <h3 className="no-subscription">
              No Subscription Available
              <img src={emoji} alt="emoji" className="sad-emoji ml-1" />
            </h3>
            <p className="victim-para">
              Spliiit is a victim of its own success, no subscription is
              available for the moment. Come back a little later or offer your
              subscription too.
            </p>
            <center>
              <button className="share-subcription">
                Share a subscription
              </button>

              <h5 className="be-notified">
                Be notified of the availability of a subscription
              </h5>
              <p class="select">
                Select the service(s) of your choice to receive an email
                notification.
              </p>
            </center>
          </div>
        </div>
        <div className="container-fluid car">
          <Carousel services={this.state.sevices} />
        </div>
        <center>
          <button className="btn-md suggest">Suggest a service</button>
        </center>

      </div>
    );
  }
}

export default SearchPage;
