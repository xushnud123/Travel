import React, { useState } from 'react';
import { AppWrapper } from './App.e';
import About from './components/about/about';
import Comp from './components/comp/comp';
import Destinations from './components/destinations/destinations';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import ServicesCard from './components/services-card/services-card';
import Steps from './components/steps/steps';
import Subscribe from './components/subscribe/subscribe';


function App() {
   const [open, setOpen] = useState(false);
  return (
    <AppWrapper open={open}>
      <Hero open={open} setOpen={setOpen}/>
      <ServicesCard/>
      <Destinations/>
      <Steps/>
      <About/>
      <Comp/>
      {/* <Subscribe/> */}
      <Footer/>
    </AppWrapper>
  );
}

export default App;
