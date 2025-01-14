import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import appImage1 from "../../assets/portfolio/Astro Trail.jpg"; // আপনার অ্যাপের ছবি
import appImage2 from "../../assets/portfolio/Astro Trail.jpg"; // আপনার অ্যাপের ছবি
import appImage3 from "../../assets/portfolio/Astro Trail.jpg"; // আপনার অ্যাপের ছবি
import "../../assets/css/AppListing.css"; // CSS ফাইলটি ইম্পোর্ট করুন

const AppListing = () => {
  const apps = [
    {
      title: "Astro Trail",
      description: "Explore the universe with Astro Trail.",
      image: appImage1,
      downloadLink: "https://example.com/app1", // ডাউনলোড লিঙ্ক
    },
    {
      title: "Health Tracker",
      description: "Track your health and fitness.",
      image: appImage2,
      downloadLink: "https://example.com/app2", // ডাউনলোড লিঙ্ক
    },
    {
      title: "Recipe Finder",
      description: "Find delicious recipes easily.",
      image: appImage3,
      downloadLink: "https://example.com/app3", // ডাউনলোড লিঙ্ক
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="display-2 text-center mb-5 flex">My Apps</h1>
      <Row>
        {apps.map((app, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="app-card">
              <Card.Img variant="top" src={app.image} />
              <Card.Body>
                <Card.Title>{app.title}</Card.Title>
                <Card.Text>{app.description}</Card.Text>
                <Button variant="primary" href={app.downloadLink} target="_blank">
                  Download
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AppListing;
