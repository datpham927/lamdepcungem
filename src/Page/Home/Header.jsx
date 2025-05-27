import React from "react";
import { LogoTiktok, logoFb, logoTiktokMobile } from "../../assets";

const Header = () => {
  return (
    <div className="flex shadow-md h-[70px]  justify-center w-full shrink-0 items-center bg-gradient-to-r from-teal-200 to-pink-200 bg-center bg-no-repeat bg-cover bg-scroll overflow-hidden max-h-full px-6">
      <div className="flex justify-center gap-2 overflow-hidden  items-center bg-white rounded-xl">
        <img
          className="w-10 h-10 "
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/483782115_122247741752065022_4525290201228224316_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=8Y1yl2qe_ZUQ7kNvwFSc8k-&_nc_oc=AdlvO_ayBEDTHrBIJeEiYScSrNFPY5SjezEppdFWuPu0GPO6crN6_3SBOc5p1043asAAZSekj5MnT4PLbNpfe81J&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=29_5gpczCaZFVHkhVglgvg&oh=00_AfLzVxFAbR4vUDWmp1ZpG_dmpiwWnQpWIdOpRMiiFkuCgQ&oe=6839F374"
        />
        <span className="p-1">Mỹ phẩm cao cấp</span>
      </div>
    </div>
  );
};

export default Header;
