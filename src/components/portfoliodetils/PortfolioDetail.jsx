import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import coverImage from "../../assets/portfolio/doctor/1.jpg"; // Replace with your image
import "./BlogDetail.css"; // Custom styles

const BlogDetail = () => {
  const blog = {
    title: "Moscow is among world's best Christmas markets",
    subtitle: "The Telegraph named world's 10 best Christmas markets – and Moscow was included on the list.",
    country: "Russia",
    date: "3 Oct",
    content: `
      Rating’s authors were impressed by glowing festive installations, aromatic mulled wine, gingerbread with crispy glaze, and crêpes with caviar. 
      Besides, you can shop nice handmade presents and souvenirs, participate in various workshops, and plunge into bright Christmas atmosphere.

      Christmas markets 2018–2019 in Moscow are going to be held around GUM and the Red Square. There you can enjoy dishes of traditional Russian cuisine and Russian interpretations of famous European drinks and snacks.
    `,
    howIMade: `
      The idea was born during a trip to Moscow in December. Observing the vibrant culture and the beautifully decorated streets, I wanted to capture the essence of what makes this city stand out.

      Using a mix of DSLR photography and interviews with local vendors, I collected unique perspectives to create an immersive narrative.
    `,
    howIdeaCameUp: `
      The concept emerged while browsing travel forums where Moscow’s Christmas markets were a hot topic. Inspired by travelers’ stories, I decided to explore the story myself and uncover what makes these markets truly magical.
    `,
    image: coverImage,
    location: "Red Square, Moscow, Russia",
  };

  return (
    <div className="blog-detail">
      <Container fluid className="px-0">
        <Row>
          {/* Left Section: Blog Text */}
          <Col md={6} className="px-4 d-flex flex-column justify-content-center">
            <div className="blog-text">
              <h5 className="text-uppercase text-muted mb-3">{blog.country}</h5>
              <h1 className="display-4 mb-3">{blog.title}</h1>
              <p className="lead mb-4">{blog.subtitle}</p>
              <p className="text-muted">{blog.date}</p>

              {/* Main Content */}
              <p>{blog.content}</p>

              {/* How I Made It */}
              <h3 className="mt-4">How I Made It</h3>
              <p>{blog.howIMade}</p>

              {/* How the Idea Came Up */}
              <h3 className="mt-4">How the Idea Came Up</h3>
              <p>{blog.howIdeaCameUp}</p>
            </div>
          </Col>

          {/* Right Section: Image */}
          <Col md={6} className="px-0">
            <div
              className="blog-image"
              style={{
                backgroundImage: `url(${blog.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
              }}
            >
              <div className="overlay text-white p-3">
                <h4>{blog.location}</h4>
                <Button variant="outline-light" className="mt-3">
                  Explore More
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogDetail;
