import React from "react";
import { Container, Button, Image } from "react-bootstrap";
import "../../../src/assets/css/Portfolio.css"


import wwe from "../../assets/portfolio/what we eat 1.jpg";
import ct from "../../assets/portfolio/class tracker.jpg";
import doctor1 from "../../assets/portfolio/doctor/1.jpg";
import doctor2 from "../../assets/portfolio/doctor/2.jpg";
import doctor3 from "../../assets/portfolio/doctor/3.jpg";
import doctor4 from "../../assets/portfolio/doctor/4.jpg";

export default function Portfolio() {
  const portfolio = [
    {
      title: "Food Scan Analyzer with AI",
      img: [wwe],
      link: "#",
      github: "#",
    },
    {
      title: "Class Scheduling Tracking",
      img: [ct],
      github: "#",
    },
    {
      title: "Online Doctor Appointment",
      img: [doctor1, doctor2, doctor3, doctor4],
      github: "#",
    },
  ];

  return (
    <Container id="portfolio" className="portfolio-section py-5">
      <h1 className="display-4 text-center mb-5">Portfolio</h1>
      <div className="portfolio-grid">
        {portfolio.map((p, key) => (
          <div className="portfolio-card" key={key}>
            <div className="portfolio-card-image">
              <Image src={p.img[0]} alt={p.title} className="img-fluid" />
            </div>
            <div className="portfolio-card-content">
              <h3 className="portfolio-card-title">{p.title}</h3>
              <div className="portfolio-card-actions">
                {p.github && (
                  <Button
                    variant="dark"
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="action-button"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </Button>
                )}
                {p.link && (
                  <Button
                    variant="primary"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="action-button"
                  >
                    <i className="fas fa-external-link-alt"></i> Visit
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

