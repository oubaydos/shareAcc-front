import React, { Component } from "react";
import "../res/css/carousel.css";
import $ from "jquery";

class Carousel extends Component {
  state = {};

  componentDidMount() {
    $(document).ready(function () {
      var itemsMainDiv = ".MultiCarousel";
      var itemsDiv = ".MultiCarousel-inner";
      var itemWidth = "";

      $(".leftLst, .rightLst").click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition) click(0, this);
        else click(1, this);
      });

      ResCarouselSize();

      $(window).resize(function () {
        ResCarouselSize();
      });

      //this function define the size of the items
      function ResCarouselSize() {
        var incno = 0;
        var dataItems = "data-items";
        var itemClass = ".item";
        var id = 0;
        var btnParentSb = "";
        var itemsSplit = "";
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $("body").width();
        $(itemsDiv).each(function () {
          id = id + 1;
          var itemNumbers = $(this).find(itemClass).length;
          btnParentSb = $(this).parent().attr(dataItems);
          itemsSplit = btnParentSb.split(",");
          $(this)
            .parent()
            .attr("id", "MultiCarousel" + id);

          if (bodyWidth >= 1200) {
            incno = itemsSplit[3];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 992) {
            incno = itemsSplit[2];
            itemWidth = sampwidth / incno;
          } else if (bodyWidth >= 768) {
            incno = itemsSplit[1];
            itemWidth = sampwidth / incno;
          } else {
            incno = itemsSplit[0];
            itemWidth = sampwidth / incno;
          }
          $(this).css({
            transform: "translateX(0px)",
            width: itemWidth * itemNumbers + 100,
          });
          $(this)
            .find(itemClass)
            .each(function () {
              $(this).outerWidth(itemWidth);
            });

          $(".leftLst").addClass("over");
          $(".rightLst").removeClass("over");
        });
      }

      //this function used to move the items
      function ResCarousel(e, el, s) {
        var leftBtn = ".leftLst";
        var rightBtn = ".rightLst";
        var translateXval = "";
        var divStyle = $(el + " " + itemsDiv).css("transform");
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e === 0) {
          translateXval = parseInt(xds) - parseInt(itemWidth * s);
          $(el + " " + rightBtn).removeClass("over");

          if (translateXval <= itemWidth / 2) {
            translateXval = 0;
            $(el + " " + leftBtn).addClass("over");
          }
        } else if (e === 1) {
          var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
          translateXval = parseInt(xds) + parseInt(itemWidth * s);
          $(el + " " + leftBtn).removeClass("over");

          if (translateXval >= itemsCondition - itemWidth / 2) {
            translateXval = itemsCondition;
            $(el + " " + rightBtn).addClass("over");
          }
        }
        $(el + " " + itemsDiv).css(
          "transform",
          "translateX(" + -translateXval + "px)"
        );
      }

      //It is used to get some elements from btn
      function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
      }
    });
  }

  render() {
    const { services } = this.props;
    return (
      <div className="container">
        <div className="row yr">
          <div
            className="MultiCarousel"
            data-items="1,3,5,6"
            data-slide="1"
            id="MultiCarousel"
            data-interval="1000"
          >
            <div
              className="MultiCarousel-inner"
              style={{ marginLeft: "-147px" }}
            >
              {services.map((service) => (
                <div className="slider-abo slick-initialized slick-slider">
                  <div className="abo-alert">
                    <div className="item">
                      <div
                        className="slider-block slick-slide slick-current slick-active"
                        data-service-id="1"
                        data-name="Netflix"
                        data-id="1"
                        data-url="https://www.netflix.com/signup/planform"
                        data-slick-index="0"
                        aria-hidden="false"
                        tabindex="-1"
                        role="option"
                        aria-describedby="slick-slide00"
                        style={{ width: "181px" }}
                      >
                        <div className="slider-content bloc-white">
                          <div className="part1-alert">
                            <img src={service.image} />
                            <div className="round-white-svg little-round"></div>
                          </div>
                          <div className="part2-alert">
                            <div className="price-alert">
                              {service.price}
                              <br />
                              <span className="month">/month</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button class="btn btn-primary leftLst btn-fn">
              <i class="fa fa-arrow-left "></i>
            </button>
            <button class="btn btn-primary rightLst btn-fn">
              {" "}
              <i class="fa fa-arrow-right "></i>{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
