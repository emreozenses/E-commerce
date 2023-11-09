import NavBarDown from "../components/NavBarDown";
import NavBarUp from "../components/NavBarUp";

const NavBar = () => {
  return <div className="flex flex-col items-center">
    <NavBarUp/>
    <NavBarDown/>
  </div>;
};

export default NavBar;
