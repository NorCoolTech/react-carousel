
import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";


const App = () => {

  


  return (
    <>
      <h4 className="title title-underline">
        this is setup with JavaScript and CSS
      </h4>
      <section className="slider-container">
        <Carousel />
      </section>
      <h4 className="title title-underline">
        this is setup with react slick library
      </h4>
      <section className="slick-container">
        <SlickCarousel />
      </section>
    </>
  );
};
export default App;
