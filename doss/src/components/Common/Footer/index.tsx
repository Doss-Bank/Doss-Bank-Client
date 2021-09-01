import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineStock } from "react-icons/ai";
import { BsFillLightningFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FooterContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <ul className="menus">
        <Link to="">
          <li className="menu">
            <h1>홈</h1>
            <AiFillHome size={40} />
          </li>
        </Link>
        <Link to="">
          <li className="menu">
            <h1>송금</h1>
            <BsFillLightningFill size={40} />
          </li>
        </Link>
        <Link to="">
          <li className="menu">
            <h1>주식</h1>
            <AiOutlineStock size={40} />
          </li>
        </Link>
        <Link to="">
          <li className="menu">
            <h1>내 정보</h1>
            <CgProfile size={40} />
          </li>
        </Link>
      </ul>
    </FooterContainer>
  );
};

export default Footer;
