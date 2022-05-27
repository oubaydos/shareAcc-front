import React, { Component } from "react";
import "../res/css/card.css";

class Card extends Component {
  state = {};
  render() {
    const { subscription } = this.props;

    return (
      <div className="width25 bloc-service mb-5">
        <li className="bloc-whitee">
          <div className="logo-search">
            <img src={subscription.image} />
          </div>
          <div className="bloc-right-search">
            <div className="relative round-block">
              <div className="big-round round-white-svg"></div>
            </div>
            <div className="bloc-black">
              <div className="user-public">
                <ul>
                  <li
                    className="btn-modal-infos"
                    style={{
                      backgroundImage:
                        "url(https://www.spliiit.com/img/man-light.png)",
                      backgroundSize: "29px",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></li>
                </ul>
              </div>
              <div className="tarif-search">
                <span className="from-tarif"> From </span>
                <br />
                {subscription.price}
                <br />
                <span>/month</span>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default Card;
