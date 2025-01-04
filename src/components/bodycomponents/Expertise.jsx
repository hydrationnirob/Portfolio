import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
export default function Expertise() {
  const skillsObj = [
    {
      skillName: "Software Engineer",
      parsent: 70,
    },
    {
      skillName: "Flutter App Development",
      parsent: 90,
    },
    {
      skillName: "Software Architecture",
      parsent: 70,
    },
    {
      skillName: "Logic Design",
      parsent: 83,
    },
    {
      skillName: "Team Leading",
      parsent: 80,
    },
    {
      skillName: "Research and Development",
      parsent: 73,
    },
  
  ];
  return (
    <Container id="expertise" className="my-5">
      <h1 className="display-4">Expertise of Md. Rakibul Haque Sardar</h1>
      <h2>Technical Skills</h2>
      <Row>
        <Col lg={6} className="my-2">
          <h5 className="mx-1 my-4 fs-5">Technical Skills</h5>
          <p>Languages: Dart, Java , C++,C, Javascript</p>
          <p>
            Libraries/Frameworks: Flutter, NextJS, ExpressJS, Spring Bot, Laravel,
            React,Material UI
          </p>
          <p>Databases & ORMs: MySQL, MongoDB, PrismaORM, Mongoose</p>
          <p>
            Familiar with: Git, Docker, Linux, Postman, Socket.io, Firebase,
            OOP, SOLID, UML , Web RTC
          </p>
          <p>
            Domain Experience: E-Commerce (Product/Service),
            E-Learning, Ride Sharing, Doctor Appointment , E-book , Food Analyzer(AI Base)
          </p>
          <hr />
          <h5 className="mx-1 my-2 fs-5"> Engineering Confidence</h5>
          {skillsObj.map((v, key) => (
            <div className="m-3" key={key}>
              <span>{v.skillName}</span>
              <ProgressBar now={v.parsent} label={`${v.parsent}%`} />
            </div>
          ))}
        </Col>
        <Col lg={6}>
          <h2>Professional Experience</h2>
          <div className="side_stick">
            <p className="fw-bold">Associate Software Engineer</p>
            <p>2024 - Present</p>
            <p>NexCode Studio</p>
            <ul>
              <li>Lead and mentor mobile development team of 5 engineers</li>
              <li>Analyze system requirements and design efficient solutions using Flutter and related technologies</li>
              <li>Design and implement scalable mobile app architectures following best practices</li>
              <li>Collaborate with stakeholders to gather requirements and provide technical solutions</li>
              <li>Implement CI/CD pipelines and code quality standards for mobile development</li>
            </ul>
          </div>
          <div className="side_stick">
            <p className="fw-bold">Junior Flutter developer</p>
            <p>2023 - 2024</p>
            <p>Globe ERP</p>
            <ul>
              <li>Developed Flutter mobile applications with clean architecture</li>
              <li>Implemented RESTful APIs integration and local data persistence</li>
              <li>Created reusable UI components and custom animations</li>
              <li>Collaborated with backend team for API specifications and integration</li>
              <li>Participated in code reviews and maintained coding standards</li>
            </ul>
          </div>
          <div className="side_stick">
            <p className="fw-bold">Freelance Flutter developer </p>
            <p>2019 - 2022</p>
            <p>Fivver. Upwork</p>
            <ul>
              <li>Developed and delivered multiple Flutter mobile applications for clients</li>
              <li>Implemented responsive UI designs and integrated backend APIs</li>
              <li>Maintained high client satisfaction through quality deliverables and communication</li>
              <li>Successfully managed concurrent projects while meeting deadlines</li>
              <li>Gained hands-on experience with Flutter state management and app architecture</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
