import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BotomSlide() {
  return (

    <div className="padd-space">
      <Container className="text-center justify-content-center">
        <h1>We transform startups into mature Tech Companies</h1>
        <Row className="justify-content-center padd-sides">
          <Col className="Custom-col-width">
            <div className="Companies-steps-box">
              <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295827/aesir/1_rmcwmr.png" alt="" />
              <h4>Research Industries</h4>
            </div>
          </Col>
          <Col className="Custom-col-width">
            <div className="Companies-steps-box">
              <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295827/aesir/2_1_k3fqkv.png" alt="" />
              <h4>Create Startups</h4>
            </div>
          </Col>
          <Col className="Custom-col-width">
            <div className="Companies-steps-box">
              <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295827/aesir/3_c3bdz1.png" alt="" />
              <h4>Invest</h4>
            </div>
          </Col>
          <Col className="Custom-col-width">
            <div className="Companies-steps-box">
              <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295827/aesir/4_pm0n3x.png" alt="" />
              <h4>Manage Companies</h4>
            </div>
          </Col>
          <Col className="Custom-col-width">
            <div className="Companies-steps-box">
              <img src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631295827/aesir/5_udhtnj.png" alt="" />
              <h4>Mature Tech Companies</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
}

export default BotomSlide;