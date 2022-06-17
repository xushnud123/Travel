import React from 'react';
import About from './components/about/about';
import Destinations from './components/destinations/destinations';
import Hero from './components/hero/hero';
import ServicesCard from './components/services-card/services-card';
import Steps from './components/steps/steps';


function App() {
  return (
    <React.Fragment>
      <Hero/>
      <ServicesCard/>
      <Destinations/>
      <Steps/>
      <About/>
    </React.Fragment>
  );
}

export default App;
