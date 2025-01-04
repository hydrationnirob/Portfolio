import React from 'react';
import { Card } from 'react-bootstrap';

export default function Service() {
  const services = [
    {
      title: 'React/Vue/Staic web page or component',
      decs: 'You will get a fast & lightweight web page or component.',
    },
    {
      title: 'Laravel Web Application',
      decs: 'You will get a fast & professional full web application using Laravel.',
    },
    {
      title: 'Next.JS web Aplication',
      decs: 'You will get a singel page,fast & SEO friendly web application using Next.JS.',
    },
    {
      title: 'MERN statck web Application',
      decs: 'You will get a lightweight & mordern full MERN web application.',
    },
    {
      title: 'Express.JS Backend rest api',
      decs: 'You will get a super fast, custom and secure rest api.',
    },
    {
      title: 'Fixing Bug of Web Application',
      decs: 'You will get a great solution for your web applicaion bug.',
    },
  ];
  return (
      <>
        {services.map((s, key) => (
          <Card
            key={key}
            className="m-1 text-center service_card"
          >
            <Card.Body>
              <Card.Title>
                <i class="fas fa-tools"></i>
              </Card.Title>
              
              <Card.Body>{s.decs}</Card.Body>
              <Card.Footer>{s.title}</Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </>
  );
}
