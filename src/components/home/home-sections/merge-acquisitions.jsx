import '../../../App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function MergeAc() {
  return (
    <>
      <Container className="padd-space">
        <h1><span>.</span> Mergers & Acquisitions</h1>

        <Row>
          <Col>
            <Card >
              <Card.Body>
                <Card.Text>
                  <h5>Some quick example text to build on the card title and make up the bulk of
                  the card's content.</h5>
                </Card.Text>
                <Card.Title> <h5>Card Title</h5> </Card.Title>
              </Card.Body>
              <Card.Img className="shadow" variant="top" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/NOTICIA_01_jt9rna.jpg" />
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Text>
                  <h5>Some quick example text to build on the card title and make up the bulk of
                  the card's content.</h5>
                </Card.Text>
                <Card.Title> <h5>Card Title</h5> </Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/NOTICIA_02_nuysux.jpg" />
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Text>
                  <h5>Some quick example text to build on the card title and make up the bulk of
                  the card's content.</h5>
                </Card.Text>
                <Card.Title> <h5>Card Title</h5> </Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/NOTICIA_03_edevlz.jpg" />
            </Card>
          </Col>

          <Col>
            <Card >
              <Card.Body>
                <Card.Text>
                  <h5>Some quick example text to build on the card title and make up the bulk of
                  the card's content.</h5>
                </Card.Text>
                <Card.Title> <h5>Card Title</h5> </Card.Title>
              </Card.Body>
              <Card.Img variant="top" src="https://res.cloudinary.com/duooqqgsu/image/upload/v1631539149/aesir/NOTICIA_04_gr0guc.jpg" />
            </Card>
          </Col>
        </Row>


        <Row>
          <Col>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>

      </Container>
    </>

  );
}

export default MergeAc;