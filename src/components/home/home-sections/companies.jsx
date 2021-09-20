import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Companies() {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,

  };
  return (
    <>
      <Container className="padd-space">
        <h1><span>.</span> Companies</h1>
      
        <Slider {...settings}>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_HYPERION_iexgrk.jpg" alt="" />
            <h4>Entertainment</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/OC_HYPERINFRA_arhtms.jpg" alt="" />
            <h4>Real Estate / Construction</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_TERAHASH_o5vnsr.jpg" alt="" />
            <h4>Crypto Mining</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_KUANTRUM_s7k22b.jpg" alt="" />
            <h4>Ecommerce</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_EOS_iffxvi.jpg" alt="" />
            <h4>Digital Agency</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_AK_iqfcgb.jpg" alt="" />
            <h4>Security</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/OC_SCINAPTECH_brn00p.jpg" alt="" />
            <h4>Government Solutions</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/OC_UBBITT_zsocuv.jpg" alt="" />
            <h4>Digital Platform</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/OC_ARKE_ydvqr1.jpg" alt="" />
            <h4>Digital Agency</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/OC_ANSUZ_eeyxpy.jpg" alt="" />
            <h4>Insurance</h4>
          </div>
          <div className="companie-slide">
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/OC_BONIVIAJES_ayp6ly.jpg" alt="" />
            <h4>Travel</h4>
          </div>
        </Slider>
      </Container>
    </>
  );
}

export default Companies;