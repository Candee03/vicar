import React from 'react';
import { useMediaQuery } from 'react-responsive';
// STYLES
import './App.scss';
// COMPONENTS
import CarouselDos from './components/carousel/carouselDos.js';
import Slide from './components/slide/Slide.js';
import Image from './components/image/Image.js';
// PROVIDER
import { data, images } from './data/data.js';


function App() {
  //------------MEDIASQUERY--------------
  const isTablet = useMediaQuery({ query: '(max-width: 1000px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

  return (
    <div className="App">
      {isMobile?
      <CarouselDos imgSize='200' timeOut='5000' data={data} arrows={'true'}></CarouselDos>
      :isTablet?
      <CarouselDos imgSize='300' timeOut='5000' data={data} arrows={'true'}></CarouselDos>
      :
      <CarouselDos imgSize='500' timeOut='7000' data={data} arrows={'false'}></CarouselDos>
      }
      <p>Lorem ipsum dolor sit amet. Sed quisquam quia et minima minima aut ipsa quae non quod aperiam et ullam quis hic earum nihil id autem inventore. 33 reiciendis illum et autem fugiat sit laborum earum. Sit ipsa iusto aut illum dolores et inventore esse in asperiores alias ut animi aliquid. Hic minus eius ut galisum dolorem id veniam minima sed voluptatem aliquid et repellat nobis sit molestiae maiores ut amet nisi. Sit enim neque non natus dolor ex excepturi inventore eum quos dolore et impedit modi id blanditiis perspiciatis vel officiis dolorem. Est suscipit omnis non reprehenderit dolores rem veritatis veritatis. Aut eveniet commodi ut sint laudantium eos nesciunt veniam eum eligendi aliquam! Aut dolorum corrupti est iste maiores qui obcaecati odio.</p>
      {isMobile?
      <Slide images={images} speedSlide={2} slideNum={5.5} imgSize='150'></Slide>
      :isTablet?
      <Slide images={images} speedSlide={2} slideNum={1.7} imgSize='200'></Slide>
      :
      <Image images={images} imgSize='300'></Image>
      }
      <p>Lorem ipsum dolor sit amet. Sed quisquam quia et minima minima aut ipsa quae non quod aperiam et ullam quis hic earum nihil id autem inventore. 33 reiciendis illum et autem fugiat sit laborum earum. Sit ipsa iusto aut illum dolores et inventore esse in asperiores.</p>
    </div>
  );
}

export default App;
