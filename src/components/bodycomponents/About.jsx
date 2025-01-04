import React from "react";
import { Col, Container, Row } from "react-bootstrap";
export default function About() {
  return (
    <Container id="about" className="my-5">
      <h1 className="display-4">About</h1>
      <Row>
        <Col lg={6}> 
        <h5 className="mx-1 my-4 fs-5">Md Rakibul Haque Sardar</h5> 
          <span>Age: 25 Years Old</span>
          <br />
          <span>Address: Naogaon , Rajshahi, Bangladesh</span>
          <br />
          <span>Nationality: Bangladeshi</span>
          <br />
          <span>Language: Bangla, English</span>
        </Col>
        <Col lg={6}>
          <h5 className="mx-1 my-4 fs-5">Education</h5>
          <div className="side_stick">
            <p className="fw-bold">BSc in CSE</p>
            <span>N/A out of 4.00</span>
            <p>January 2022 - December 2025 (Running)</p>
            <p>
              Varendra University{" "}
              <sub>
                <small>Rajshahi, Bangladesh</small>
              </sub>
            </p>
          </div>
          <div className="side_stick">
            <p className="fw-bold">HSC</p>
            <span>4.56 out of 5.00</span>
            <p>January 2019 - December 2020</p>
            <p>
            Sher-E-Bangla Mahavidyalaya{" "}
              <sub>
                <small>Naogaon, Bangladesh</small>
              </sub>
            </p>
          </div>
        </Col>
      </Row>

    </Container>
  );
}
