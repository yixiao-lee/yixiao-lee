
import React, { useState } from "react";
import "./Header.css";
// import { AiOutlineBars } from "react-icons/ai";
// import { RiCloseLine } from "react-icons/ri";
import { SiKhanacademy } from "react-icons/si";

const Header = () => {
  // const [showMenu, setShowMenu] = useState(false);

  // const toggleMenu = () => {
  //   setShowMenu(!showMenu);
  // };
  return (
    <div className="header">
      <div className="header_left">
       <SiKhanacademy size = "38" color = "cyan" />
       <div className="header_left_text">Fun <span className="header_left_char">E</span>ducation</div>
      </div>
      <div className="header_right">
        <img className="rounded-circle" src="https://picsum.photos/id/3/80/80"/>
      </div>
    </div>
  );
};

export default Header;
