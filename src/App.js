import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Element } from 'react-scroll';
// STYLES
import './App.scss';
// COMPONENTS
import CarouselDos from './components/carousel/carouselDos.js';
import Slide from './components/slide/Slide.js';
import Image from './components/image/Image.js';
// PROVIDER
import { data, images } from './data/data.js';
import Form from './components/form/Form.js';
import Navbar from './components/navBar/NavBar.js';


function App() {
  //------------MEDIASQUERY--------------
  const isTablet = useMediaQuery({ query: '(max-width: 1000px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div className="App">
      <Navbar navList= {['Quienes Somos', 'Servicios', 'Clientes', 'Cotizar']}></Navbar>

      <Element name="section1">
        {isMobile?
        <CarouselDos imgSize='200' timeOut='5000' data={data} arrows={'true'}></CarouselDos>
        :isTablet?
        <CarouselDos imgSize='300' timeOut='5000' data={data} arrows={'true'}></CarouselDos>
        :
        <CarouselDos imgSize='500' timeOut='7000' data={data} arrows={'false'}></CarouselDos>
        }
      </Element>

      <Element name="section2">
        {isMobile?
        <Slide images={images} speedSlide={2} slideNum={5.5} imgSize='150'></Slide>
        :isTablet?
        <Slide images={images} speedSlide={2} slideNum={1.7} imgSize='200'></Slide>
        :
        <Image images={images} imgSize='300'></Image>
        }
      </Element>
      
      <Element name="section3">
        <Form></Form>
      </Element>
    </div>
  );
}

export default App;
