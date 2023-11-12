import { Input } from "reactstrap";
import logo from "../assets/modaevim.png";
import { Search } from "@styled-icons/bootstrap/Search";
import { PersonFill } from "@styled-icons/bootstrap/PersonFill";
import { ShoppingCartOutline } from "@styled-icons/evaicons-outline/ShoppingCartOutline";
import NavBarComp from "./NavBarComp";


const NavBarDown = () => {
  return (
    <div className="flex flex-row w-[95vw] h-[12vh] bg-white bg-cover">
      <img className="w-[10vw] mr-25" src={logo} alt="company logo" />
      <div className="flex flex-col justify-between grow">
        <div className="flex flex-row h-[3vh] place-content-end items-end">
          <span className="font-light text-xs mr-12 whitespace-nowrap ">
            Hakkımızda
          </span>
          <span className=" font-light text-xs mr-2 whitespace-nowrap ">
            Yardım&Destek
          </span>
        </div>
        <div className="flex flex-row items-center h-[5vh]">
          <Input
            className="ml-40"
            type="text"
            placeholder="Aradığınız marka, kategori veya ürünü yazınız"
          />
          <Search size={40} className="ml-2 mr-20" />
          <PersonFill size={48} className="ml-40" />
          <span className="text-sm mr-2 whitespace-nowrap font-bold">
            Giriş Yap / Üye Ol
          </span>
          <ShoppingCartOutline size={48} className="ml-10" />
          <span className="text-sm mr-2 whitespace-nowrap font-bold">
            Sepetim
          </span>
        </div>
        <div className="flex flex-row h-[6vh] w-[70vw] items-center place-content-center">
          <NavBarComp/>
          </div>
      </div>
    </div>
  );
};

export default NavBarDown;
