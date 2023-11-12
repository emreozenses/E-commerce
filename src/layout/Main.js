import Carousel from "./Carousel";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import ProductCards from "./ProductCards";
import ShopCards from "./ShopCards";

const Main = () => {
  return (
    <div className="flex flex-col items-center max-h-fit">
      <Header />
      <ShopCards />
      <ProductCards />
      <Carousel />
      <Container />
      <Footer />
    </div>
  );
};

export default Main;
