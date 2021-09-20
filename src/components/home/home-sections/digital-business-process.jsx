import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


function DigitalBus() {
  return (
    <div className="padd-space">

      <div >
        <Container>
          <h1><span>.</span> Digital Business Process</h1>
          <Row className="padd-space pos-relative z-index-col">
            <hr className="hr-bar"/>
            <Col>
              <div className="companie-process">
                <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/BUSSINESS_hyubxi.png" alt="" />
                <h5>Bussiness Model Analysis</h5>
              </div>
            </Col>
            <Col>
              <div className="companie-process">
                <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/INVESTMENT_v1i2i9.png" alt="" />
                <h5>Investment</h5>
              </div>
            </Col>
            <Col>
              <div className="companie-process">
                <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/M_F_fh6m5q.png" alt="" />
                <h5>Management & Financing</h5>
              </div>
            </Col>
            <Col>
              <div className="companie-process">
                <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/INVESTOR_ribq4j.png" alt="" />
                <h5>Investor Relations</h5>
              </div>
            </Col>
            <Col>
              <div className="companie-process">
                <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/A_M_sqctzu.png" alt="" />
                <h5>Acquisitions & Mergers</h5>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container>
          <Row className="justify-content-center">
            <Col md={4}>
              <Image className="f-widht" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/BUSSINESS_MODEL_wdl8bo.jpg"  />
            </Col>

            <Col md={8}>
              <Card >
                <Card.Body>
                  <Card.Title><h1><span>.</span> Business Model</h1> </Card.Title>
                  <Card.Text className="text-muted ">
                    <p>
                      We sell,  buy or design  business models and companies that grow exponentially and  thrive in this ever changing landscape. 
                    </p>
                    <p>
                      We invest, manage, mature them to be Digital, Global, Scalable and with a special focus on sustainability.
                    </p>
                    <p>
                      We stress business models through our Digital Business Ecosystem theory and create complex platforms conformed by systems and subsystems that intertwine supply and demand. This connects an existing or creates a new speeding and exponential market.
                    </p>
                    <p>
                      Our companies and products are design with data science, state of the art technology and customer centric experiences. We have a relentlessly commit to the pursuit of perfection, Quality, Innovation, Science and  Creation of Value. 
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

    </div>

  );
}

export default DigitalBus;