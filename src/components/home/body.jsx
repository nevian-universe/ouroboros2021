import '../../App.css';
import React from 'react';
import Slide from './home-sections/slide'
import BotomSlide from './home-sections/botom-slide-steps'
import DigitaE from './home-sections/digital-ecosystem'
import MergeAc from './home-sections/merge-acquisitions'
import DigitalBus from './home-sections/digital-business-process'
import Companies from './home-sections/companies'
import ServiceSec from './home-sections/services'
import ClientsSec from './home-sections/clients'


function Body() {
  return (
  <>
    <Slide />
    <BotomSlide/>
    <DigitaE/>
    <DigitalBus/>
    <Companies/>
    <ServiceSec/>
    <ClientsSec/>
    <MergeAc/>
  </>
  );
}

export default Body;