import React, { Component } from "react";
import "../res/css/searchpage.css";

class ButtonLine extends Component {
  state = {
    class_1: "",
    class_2: "",
    class_3: "",
    class_4: "",
    class_5: "",
    class_6: "",
    class_7: "",
    class_8: "",
    class_9: "",
  };

  setClass = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    let impVar = this.state[e.target.className];
    if (e.target.value && impVar === "") {
      impVar = e.target.name;
      this.setState({ [e.target.className]: impVar });
    } else if (impVar === e.target.name) {
      impVar = "";
      this.setState({ [e.target.className]: impVar });
    }
  };

  render() {
    return (
      <div class="line-theme-service">
        <span>
          <label
            className={
              "theme-1 radio-2 theme-service-mkp active " + this.state.class_1
            }
          >
            <input
              onClick={this.setClass}
              id="theme-1"
              data-id="1"
              className="class_1"
              type="checkbox"
              name=" svod-theme-active"
              value="SVOD"
              required=""
            />
            SVOD{" "}
          </label>
        </span>
        <span>
          <label
            className={
              "theme-2 radio-2 theme-service-mkp active" + this.state.class_2
            }
          >
            <input
              onClick={this.setClass}
              id="theme-2"
              data-id="2"
              className="class_2"
              type="checkbox"
              value="Music"
              name=" music-theme-active"
              required=""
            />
            Music{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-5 radio-2 theme-service-mkp" + this.state.class_3}
          >
            <input
              onClick={this.setClass}
              id="theme-5"
              data-id="5"
              className="class_3"
              type="checkbox"
              name=" security-theme-active"
              value="Security"
              required=""
            />
            Security{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-4 radio-2 theme-service-mkp" + this.state.class_4}
          >
            <input
              onClick={this.setClass}
              id="theme-4"
              data-id="4"
              className="class_4"
              type="checkbox"
              name=" video-theme-active"
              value="Video games"
              required=""
            />
            Video games{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-6 radio-2 theme-service-mkp" + this.state.class_5}
          >
            <input
              onClick={this.setClass}
              id="theme-6"
              data-id="6"
              className="class_5"
              type="checkbox"
              name=" software-theme-active"
              value="Software"
              required=""
            />
            Software{" "}
          </label>
        </span>
        <span>
          <label
            className={
              "theme-11 radio-2 theme-service-mkp active active=theme" +
              this.state.class_6
            }
          >
            <input
              onClick={this.setClass}
              id="theme-11"
              data-id="11"
              className="class_6"
              type="checkbox"
              name=" reading-theme-active"
              value="Reading"
              required=""
            />
            Reading{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-3 radio-2 theme-service-mkp" + this.state.class_7}
          >
            <input
              onClick={this.setClass}
              id="theme-3"
              data-id="3"
              className="class_7"
              type="checkbox"
              name=" commerce-theme-active"
              value="E-commerce"
              required=""
            />
            E-commerce{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-7 radio-2 theme-service-mkp" + this.state.class_8}
          >
            <input
              onClick={this.setClass}
              id="theme-7"
              data-id="7"
              className="class_8"
              type="checkbox"
              name=" cloud-theme-active"
              value="Cloud"
              required=""
            />
            Cloud{" "}
          </label>
        </span>
        <span>
          <label
            className={"theme-12 radio-2 theme-service-mkp" + this.state.class_9}
          >
            <input
              onClick={this.setClass}
              id="theme-12"
              data-id="12"
              className="class_9"
              type="checkbox"
              name=" wellbeing-theme-active"
              value="Well-being"
              required=""
            />
            Well-being{" "}
          </label>
        </span>
      </div>
    );
  }
}

export default ButtonLine;
