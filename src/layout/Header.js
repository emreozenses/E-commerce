import CarouselComp from "../components/CarouselComp";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="h-[99vh] w-[95vw] flex flex-col items-center">
      <NavBar />
      <CarouselComp />
    </div>
  );
};

export default Header;
