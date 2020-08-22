import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import caregiverDay from "assets/img/caregiver-day.jpeg";
// import homeHealthCare from "assets/img/HomeHealth.jpeg";
// import HomeHealth from "assets/img/homeHealthCare.jpeg";
import FatherandSons from "assets/img/FatherandSons.jpeg";
import homeHealthCare2 from "assets/img/homeHealthCare2.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src={caregiverDay}
                    alt="First slide"
                    className="slick-image"
                  />
                  <div className="slick-caption"></div>
                </div>
                <div>
                  <img
                    src={FatherandSons}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption"></div>
                </div>
                <div>
                  <img
                    src={homeHealthCare2}
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption"></div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
