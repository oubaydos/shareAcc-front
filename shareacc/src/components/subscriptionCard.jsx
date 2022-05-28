import { Link } from "react-router-dom";
import React from "react";
import "../res/css/subscriptionCard.css";
import Arrow from "./svg-components/arrow";

const SubscriptionCard = () => {
  return (
    <div class="bloc-white bloc-abo-dashh">
      <div class="relative">
        <div class="part1-bloc">
          <div class="flex line-service-dash">
            <img
              src="https://www.spliiit.com/img/subscription/netflix.png"
              alt="logo Netflix"
              title="logo Netflix"
            />
            <div class="tarif-bloc-dash">
              4€
              <br />
              <span>/per month</span>
            </div>
          </div>
          <div class="title-bloc-dash">
            Netflix Premium
            <div class="statut-info">
              <span class="rose d-none check-mail" data-id="49268">
                A request for confirmation of identifier
                <br /> was sent to you
              </span>
              <div class="display-status-49268">
                <div class="display-status-private ">
                  <span>Private</span>
                  <span class="goto-public" data-id="49268">
                    | <span>Public</span>
                  </span>
                </div>
                <div class="display-status-public d-none">
                  <span>Public</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative round-block">
          <div class="big-round round-white-svg"></div>
        </div>
      </div>

      <div class="part2-bloc">
        <div class="spliiiter-card-dash flex">
          <div class="subscriber">
            <a
              class="btn-modal-infos border-owner-dash"
              style={{
                backgroundImage:
                  "url(https://www.spliiit.com/img/man-light.png)",
              }}
            ></a>
            <p class="subscriber-name">
              Ahsan A.<span class="seat-place"></span>
            </p>
          </div>

          <a
            id="show-dialogue-share"
            class="btn-modal-infos add-spliiiter-card"
          >
            <div
              class="share-spliiiter"
              id="share"
              data-url="https://www.spliiit.com/5fbfe1c78358d"
              data-id="5fbfe1c78358d"
              data-text="Ahsan offers to share the price of his/her subscription. Only 3 slots available, don't waste time !"
            >
              +
            </div>
          </a>
          <div class="nb-spliiiter-dash">
            <span class="blue">1</span>/4
            <br />
            <span class="info-nb-spliiiter">Spliiiters</span>
          </div>
        </div>
          <a href="https://www.spliiit.com/myspliiit/49268/details">
            <div class="btn-detail-offerr">
              Manage subscription
              <Arrow />
            </div>
          </a>

      </div>
    </div>
  );
};

export default SubscriptionCard;
