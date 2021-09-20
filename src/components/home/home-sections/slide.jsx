import '../../../App.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Slide() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295828/aesir/MAPA_ybckde.png"
            alt="First slide"
          />
          <div className="Carousel-caption_top">
            <Carousel.Caption className="text-left">
              <div>
                <h2>By incubating Digital Ecosystems</h2>
                
                <h4>we want to create a better future for humankind</h4>
                
                <h3>with high probabilities of becoming unicorns</h3>
              </div>
            </Carousel.Caption>

            <Carousel.Caption className="text-right">
              <div>
                <h2>We are a Global Corporation</h2>
                
                <h4>with diversify interests and investments through</h4>
                
                <h3>Spain, Canada and Latin America</h3>
              </div>
            </Carousel.Caption>
          </div>
          <Carousel.Caption>
            <h4>With better technology we are sure together
              <br />
              we'll create a better future for humankind
            </h4>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>

  );
}
  
export default Slide;