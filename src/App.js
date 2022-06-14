import React from 'react';
import Destinations from './components/destinations/destinations';
import Hero from './components/hero/hero';
import ServicesCard from './components/services-card/services-card';


function App() {
  return (
    <React.Fragment>
      <Hero/>
      <ServicesCard/>
      <Destinations/>
    </React.Fragment>
  );
}

export default App;
