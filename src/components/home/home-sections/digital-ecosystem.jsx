import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function DigitaE() {
  return (
    <>
      <Container className="padd-space">
        <Row className="justify-content-center">
          <Col md={8}>
            <Card >
              <Card.Body>
                <Card.Title><h1><span>.</span> Digital Ecosystem</h1></Card.Title>
                <Card.Text className="text-muted">
                  <p>
                    The systematization of a business model through a complex platform conformed by systems and subsystems that intertwine supply and demand. 
                  </p>
                  <p>
                    This connects an existing or creates a new market speeding the production of multiple data sets that analyzed through different industries create business models based on new paradigms of customer centricity with unlimited replicable, scalable, global potential characteristics.
                  </p>
                  <p>
                    This delivers a superior and simpler customer experience and bigger value to consumers-users and stakeholders of the digital ecosystem. In other words is the systematization and  viralization of supply and demand.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Image className="f-widht" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/DIGITAL_ECOSYSTEM_eucu9m.png"  />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DigitaE;