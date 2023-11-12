import { LocalPhone } from "@styled-icons/material/LocalPhone";
import { Mail } from "@styled-icons/entypo/Mail";
import { Youtube } from "@styled-icons/boxicons-logos/Youtube";
import { Instagram } from "@styled-icons/bootstrap/Instagram";

const NavBarUp = () => {
  return (
    <div className="flex w-[95vw] h-[5vh]  bg-sky-950 bg-cover text-white text-xs justify-between ">
      <div className="flex flex-row items-center">
        <LocalPhone className="ml-5 mr-1" size="14" />
        <span>444 4 444</span>
        <Mail className="ml-4 mr-1" size="14" />
        <span>info@modaevim.com</span>
      </div>
      <div className="flex flex-row items-center">
        <span>Bizi Takip Edin : </span>
        <Instagram className="ml-1" size="16" />
        <Youtube className="ml-1 mr-2" size="24" />
        <span className="mr-5 ">%80'e varan indirim kazanin!</span>
      </div>
    </div>
  );
};

export default NavBarUp;
