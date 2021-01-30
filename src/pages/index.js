import LayoutOne from "../components/Layout/LayoutOne";
import SliderTwo from "../components/Sections/Slider/SliderTwo";
import sliderData from "../data/slider/sliderOne.json";
import IntroductionOne from "../components/Sections/Introduction/IntroductionOne";
import introductionOneData from "../data/introduction/introductionOne.json";
import IntroductionSeven from "../components/Sections/Introduction/IntroductionSeven";
import introductionSevenData from "../data/introduction/introductionSeven.json";
import IntroductionFive from "../components/Sections/Introduction/IntroductionFive";
import ProductSlideOne from "../components/Sections/ProductThumb/ProductSlide/ProductSlideOne";
import productSlideOneData from "../data/products.json";

export default function homepage1() {
  return (
    <LayoutOne title="Home" data={sliderData} className="-style-1">
      <SliderTwo data={sliderData} className="-style-1" showDots />
      <IntroductionOne data={introductionOneData} />
      <IntroductionSeven data={introductionSevenData} />
      <ProductSlideOne data={productSlideOneData} />
      <IntroductionFive />
    </LayoutOne>
  );
}