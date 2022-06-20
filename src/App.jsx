import React from 'react';
import About from './components/about/about';
import Comp from './components/comp/comp';
import Destinations from './components/destinations/destinations';
import Hero from './components/hero/hero';
import ServicesCard from './components/services-card/services-card';
import Steps from './components/steps/steps';
import Subscribe from './components/subscribe/subscribe';


function App() {
  return (
    <React.Fragment>
      <Hero/>
      <ServicesCard/>
      <Destinations/>
      <Steps/>
      <About/>
      <Comp/>
      <Subscribe/>
    </React.Fragment>
  );
}

export default App;
