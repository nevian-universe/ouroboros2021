import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ClientsSec() {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,

  };
  return (
    <>
      <Container className="padd-space">
        <h1><span>.</span> Clients</h1>
      
        <Slider {...settings}>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/CLIENT_LINIO_ilgvgj.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/CLIENT_COMITEOLIMPICO_cpdudj.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/CLIENT_LEOBURNETT_w3no9t.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/CLIENT_STARCOM_thhhp6.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/CLIENT_20CENTURY_zlghz7.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632677/aesir/CLIENT_SECCIONAMARILLA_z9fw8b.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/CLIENT_VW_p9o7gg.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/CLIENT_PARAMOUNT_mclql6.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/CLIENT_UBER_er7jtb.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/OC_HYPERINFRA_arhtms.jpg" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/CLIENT_MEC_twqhkl.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/CLIENT_PEMEX_p29v5n.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632678/aesir/CLIENT_CHAMPIONS_sfbssx.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/CLIENT_CITIBANAMEX_vn8xly.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/CLIENT_CMIC_rhpzzh.png" alt="" />
          </div>
          <div>
            <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631632679/aesir/CLIENT_SPOTIFY_zgpz35.png" alt="" />
          </div>
        </Slider>
      </Container>
    </>
  );
}

export default ClientsSec;