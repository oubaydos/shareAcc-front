import react, { useState } from "react";
// import Footer from "../footer";
// import Header from "../navbar2";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function (props) {
  const [tabsCount, setTabsCount] = useState(1);
  const getCalenderDate = () => {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var d = new Date();
    var n = month[d.getMonth()];
    var year = d.getFullYear();

    return n + " " + year;
  };
  return (
    <>
      {/* <Header /> */}
      <div className="subscriptionDetailBody">
        <div style={{ justifyContent: "space-between" }} className="firstBox">
          <div className="display-flex" style={{ display: "flex" }}>
            <img
              src="https://www.spliiit.com/img/subscription/netflix.png"
              alt="logo Netflix"
              title="logo Netflix"
            />
            <a
              href="https://www.spliiit.com/blog/post/partager-son-compte-netflix"
              class="btn-how-blog"
            >
              ?
            </a>
          </div>
          <div
            style={{ position: "initial" }}
            className="statut-paiement-cagnotte"
          >
            <span
              style={{
                top: "12px",
                position: "relative",
                right: "42px",
              }}
            >
              No
            </span>
            <div style={{ border: "none" }} className="card">
              <label for="tooffer-switch">
                <input type="checkbox" id="tooffer-switch" />
                <span className="switch"></span>
                <span className="toggle"> </span>
              </label>
            </div>
            <span
              style={{
                position: "relative",
                top: "12px",
              }}
            >
              Yes
            </span>
          </div>
        </div>

        <div className="boxContainer">
          <div className="box">
            <h3>Netflix Premium</h3>
            <p>15.99€</p>
            <a
              class="link-btn-help"
              href="https://www.spliiit.com/blog/post/partager-son-compte-netflix"
            >
              How to share it ?
            </a>
          </div>

          <div style={{ marginLeft: 20, marginRight: 20 }} className="box">
            <h3>Netflix Premium</h3>
            <p>15.99€</p>
            <a
              class="link-btn-help"
              href="https://www.spliiit.com/blog/post/partager-son-compte-netflix"
            >
              How to share it ?
            </a>
          </div>

          <div className="box">
            <h3>Netflix Premium</h3>
            <p>15.99€</p>
            <a
              class="link-btn-help"
              href="https://www.spliiit.com/blog/post/partager-son-compte-netflix"
            >
              How to share it ?
            </a>
          </div>
        </div>

        <div className="bloc-spliiit bloc-grey">
          <div
            class="center-spliiiter"
            data-reservedstyle="url(https://www.spliiit.com/img/reserved-slot.png)"
          >
            <ul
              class="list-spliiiter"
              data-subscribers="0"
              data-reserved="0"
              data-max="3"
            >
              <li>
                <div
                  class="spliiiter-img me"
                  style={{
                    backgroundImage:
                      "url(https://www.spliiit.com/img/man-light.png)",
                  }}
                ></div>
                <p class="blue">Me</p>
              </li>
              <li class="free-slot btn-modal-open">
                <div class="spliiiter-img">
                  <div class="delete-reserved-puce d-none">x</div>{" "}
                </div>
                <p>Free</p>
              </li>
              <li class="free-slot btn-modal-open">
                <div class="spliiiter-img">
                  <div class="delete-reserved-puce d-none">x</div>{" "}
                </div>
                <p>Free</p>
              </li>
              <li class="free-slot btn-modal-open">
                <div class="spliiiter-img">
                  <div class="delete-reserved-puce d-none">x</div>{" "}
                </div>
                <p>Free</p>
              </li>
            </ul>
          </div>
          <div class="line-options">
            <div id="show-dialogue-share" class="center-add-btn">
              <div class="vue-message-to-group-zone">
                <a href="#" class="btn-detail-offer btn-messagerie">
                  <svg
                    version="1.1"
                    id="Calque_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    xmlSpace="preserve"
                  >
                    <path d="M76.3,0H23.6C10.6,0,0,9.9,0,22v31.6c0,12.1,10.6,22,23.6,22h16.9L73,100V75.6h3.4c13,0,23.7-9.9,23.7-22V22 C100,9.9,89.3,0,76.3,0z M94,53.6c0,8.8-7.9,16-17.7,16H67V88L44.1,70.8l-1.6-1.2H23.6c-9.7,0-17.6-7.2-17.6-16V22 c0-8.8,7.9-16,17.6-16h52.7C86.1,6,94,13.2,94,22V53.6z"></path>{" "}
                    <path d="M50,32.2c-3.2,0-5.8,2.6-5.8,5.7c0,3.2,2.6,5.8,5.7,5.8c3.2,0,5.8-2.6,5.8-5.7C55.7,34.8,53.1,32.3,50,32.2z"></path>{" "}
                    <path d="M29.8,32.2c-3.2,0-5.8,2.5-5.8,5.7c0,3.2,2.5,5.8,5.7,5.8c3.2,0,5.8-2.5,5.8-5.7c0,0,0,0,0,0C35.5,34.9,33,32.3,29.8,32.2 C29.8,32.2,29.8,32.2,29.8,32.2z"></path>{" "}
                    <path d="M70.3,32.2c-3.2,0-5.8,2.5-5.8,5.7c0,3.2,2.5,5.8,5.7,5.8s5.8-2.5,5.8-5.7c0,0,0-0.1,0-0.1C76,34.8,73.4,32.3,70.3,32.2z"></path>
                  </svg>
                  Message to the group
                </a>
              </div>

              <Link to="/dashboard/manageSubscription/invite">
                <div
                  class="add-spliiiter share-spliiiter "
                  id="share"
                  data-url="https://www.spliiit.com/5fbfe1c78358d"
                  data-id="5fbfe1c78358d"
                  data-text="Ahsan offers to share the price of his/her subscription. Only 3 slots available, don't waste time !"
                >
                  <span>+</span> Invite{" "}
                </div>
              </Link>
            </div>
            <span id="anchor-vault"></span>
          </div>
        </div>

        <div
          style={{
            boxShadow: "none",
            backgroundColor: "transparent !important",
          }}
          className="firstBox"
        >
          <div
            onClick={() => setTabsCount(1)}
            className={tabsCount == 1 ? "tab c-active" : "tab"}
          >
            Payments
          </div>
          <div
            onClick={() => setTabsCount(2)}
            className={tabsCount == 2 ? "tab c-active" : "tab"}
          >
            Credentials
          </div>
          <div
            onClick={() => setTabsCount(3)}
            className={tabsCount == 3 ? "tab c-active" : "tab"}
          >
            Customize
          </div>
        </div>
        {tabsCount == 1 && (
          <div className="firstBox spaceBetween">
            <h3 className="firstBoxTabH3">Payment history</h3>
            <div className="calanderContainer">
              <div style={{ marginRight: 30 }} className="arrow">
                <FontAwesomeIcon
                  style={{ position: "initial", margin: 0 }}
                  color="white"
                  icon={faChevronLeft}
                />
              </div>
              <span className="calanderVal">{getCalenderDate()}</span>
              <div style={{ marginLeft: 30, opacity: 0.5 }} className="arrow">
                <FontAwesomeIcon
                  style={{ position: "initial", margin: 0 }}
                  color="white"
                  icon={faChevronRight}
                />
              </div>
            </div>
          </div>
        )}

        {tabsCount == 2 && (
          <div style={{ display: "block" }} className="firstBox">
            <h3 className="firstBoxTabH3">Credentials of Crunchyroll</h3>
            <div className="firstBoxInputContainer">
              <div className="firstBoxInputLogo">
                <img
                  height={40}
                  src="https://www.spliiit.com/img/subscription/crunchyroll.png"
                  alt="logo Crunchyroll Mega Fan (1 month)"
                  title="logo Crunchyroll Mega Fan (1 month)"
                />
              </div>
              <form style={{ display: "flex" }}>
                <div className="formInputContainer">
                  <p className="formInputLabel">Username</p>
                  <input className="formInput" />
                </div>

                <div className="formInputContainer">
                  <p className="formInputLabel">Password</p>
                  <input className="formInput" />
                </div>
              </form>
              <div className="goCircle"></div>
            </div>
          </div>
        )}

        <div className="firstBox">
          <p style={{ margin: 0, display: "flex", alignItems: "center" }}>
            <strong>Delete this Spliiit</strong> (Cancel all your subscribers
            and their debits)
            <img
              style={{
                height: 25,
                verticalAlign: -5,
                marginLeft: 5,
              }}
              src="https://www.spliiit.com/img/delete-spliiit.png"
            />
          </p>
          <a
            id="delete"
            href="#"
            class="btn-retour btn-option delete-btn deleteButton"
            data-action="delete"
            data-id="5fbfe1c78358d"
          >
            Delete this Spliiit
          </a>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
