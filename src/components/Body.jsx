import React from 'react';
import About from './bodycomponents/About';
import Banner from './bodycomponents/Banner';
import Contact from './bodycomponents/Contact';
import Portfolio from './bodycomponents/Portfolio';
import Expertise from './bodycomponents/Expertise';

export default function Body() {
  return (
    <main>
      <Banner />
      <About />
      <Expertise />
      <Portfolio />
      
      <Contact />
    </main>
  );
}
