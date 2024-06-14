import './App.scss';
import CarouselDos from './components/carousel/carouselDos.js';
import Slide from './components/slide/Slide.js';
import { data, images } from './data/data.js';

function App() {
  return (
    <div className="App">
      <CarouselDos imgSize='200' timeOut='5000' data={data} arrows={'true'}></CarouselDos>
      <p>Lorem ipsum dolor sit amet. Sed quisquam quia et minima minima aut ipsa quae non quod aperiam et ullam quis hic earum nihil id autem inventore. 33 reiciendis illum et autem fugiat sit laborum earum. Sit ipsa iusto aut illum dolores et inventore esse in asperiores alias ut animi aliquid. Hic minus eius ut galisum dolorem id veniam minima sed voluptatem aliquid et repellat nobis sit molestiae maiores ut amet nisi. Sit enim neque non natus dolor ex excepturi inventore eum quos dolore et impedit modi id blanditiis perspiciatis vel officiis dolorem. Est suscipit omnis non reprehenderit dolores rem veritatis veritatis. Aut eveniet commodi ut sint laudantium eos nesciunt veniam eum eligendi aliquam! Aut dolorum corrupti est iste maiores qui obcaecati odio.</p>
      <Slide images={images} speedSlide={2} slideNum={2.5} imgSize='300'></Slide>
      <p>Lorem ipsum dolor sit amet. Sed quisquam quia et minima minima aut ipsa quae non quod aperiam et ullam quis hic earum nihil id autem inventore. 33 reiciendis illum et autem fugiat sit laborum earum. Sit ipsa iusto aut illum dolores et inventore esse in asperiores.</p>
    </div>
  );
}

export default App;
