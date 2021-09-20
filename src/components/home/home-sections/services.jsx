import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function ServiceSec() {
  return (
    <>
      <Container className="padd-space">
        <h1><span>.</span> Services</h1>
        <Row>
          <Col>
            <Card >
              <Card.Body>
                <Card.Title> <h4>Digital Business Consulting</h4> </Card.Title>
                <Card.Text className="mb-2 text-muted">
                  <p>Creating a business is hard enough, while creating a digital business is one of the more challenging  quests of our time.</p>
                  <p>Whether you have a business idea or an existing business our consulting experts are ready to set up the complete business and digital ecosystem side by side.</p>
                  <p>From the assessment, planning, implementation and performance to achieve a profitable scalable digital business. </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Title> <h4>Partial Acquisition Of Potential Digital Business</h4> </Card.Title>
                <Card.Text className="mb-2 text-muted">
                  <p>When a company is struggling in digital transformation, growth or not generating enough revenue.</p>
                  <p>We create a partnership with selected business and  offer to buy stock. </p>
                  <p>We take management control and lead the company's digital business transformation.</p>
                  <p>All this in order to create value for the stakeholders and profits for the company.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Title> <h4>Digital Transformation Consulting & Implementation</h4> </Card.Title>
                <Card.Text className="mb-2 text-muted">
                  <p>Across industries, organizations are accelerating digital transformation processes for long-term growth and profitability.</p>
                  <p>The quest to transform companies is a dangerous, painful and slow.</p>
                  <p>Our team of experts will guide where to you assess , plan and implement successfully the steps needed to take your organization to the next era of competitive advantages.</p>
                  <p>Successfully using state of the art technologies correctly applied to transform your organization in to a  data driven industry leader.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Title> <h4>Seller Brokerage Of Digital Companies</h4> </Card.Title>
                <Card.Text className="mb-2 text-muted">
                  <p>Providing Specialist Acquisition Support to Your Organization.</p>
                  <p>We operate globally and specialize in the acquisition and divestiture of international businesses and business assets.</p>
                  <p>The firm couples traditional relationships with proprietary technology to identify, value, and sell businesses faster than traditional brokerages.</p>
                  <p></p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ServiceSec;